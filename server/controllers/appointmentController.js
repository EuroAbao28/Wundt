const Appointment = require("../models/appointmentModel");
const sendApprovalEmail = require("../utils/emailService");
const { validateFields } = require("../utils/validationField");
const createError = require("http-errors");
const { parseISO, isBefore, addMinutes, format } = require("date-fns");
const { formatInTimeZone, toZonedTime } = require("date-fns-tz");

const createAppointment = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      date,
      time,
      branch,
      selectedServices,
      comments,
    } = req.body;

    console.log(req.body);

    // specified field, might change later to req.body for scalability
    validateFields({
      firstname,
      lastname,
      phone,
      email,
      date,
      time,
      branch,
      selectedServices,
      comments,
    });

    const combinedDateAndTimeString = `${date}T${time}:00`;

    const appointmentDateAndTime = toZonedTime(
      new Date(combinedDateAndTimeString),
      "Asia/Manila"
    );

    const manilaDateAndTimeNow = toZonedTime(new Date(), "Asia/Manila");

    console.log("combinedDateAndTimeString", combinedDateAndTimeString);
    console.log("appointmentDateAndTime", appointmentDateAndTime);
    console.log("manilaDateAndTimeNow", manilaDateAndTimeNow);

    // just accept the future date
    if (appointmentDateAndTime <= manilaDateAndTimeNow) {
      return next(createError(400, "Appointment must be in the future"));
    }

    //  duplicate check (timezone-aware)
    const manilaDate = toZonedTime(new Date(date), "Asia/Manila");
    const startOfDay = new Date(manilaDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(manilaDate.setHours(23, 59, 59, 999));

    const existingAppointment = await Appointment.findOne({
      email,
      firstname,
      lastname,
      dateTime: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
      selectedServices: { $in: selectedServices },
      status: { $nin: ["canceled", "declined"] },
    });

    if (existingAppointment) {
      const formattedDate = format(
        new Date(existingAppointment.dateTime),
        "MMMM d, yyyy"
      );
      return next(
        createError(
          409,
          `Already have a ${existingAppointment.status} appointment for these services on ${formattedDate}`
        )
      );
    }

    // create new appointment
    const newAppointment = await Appointment.create({
      firstname,
      lastname,
      phone,
      email,
      dateTime: appointmentDateAndTime,
      branch,
      selectedServices,
      comments,
    });

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    next(error);
  }
};

const getCategorizedAppointments = async (req, res, next) => {
  try {
    const branchCondition =
      req.admin.role === "head_admin"
        ? {}
        : { branch: req.admin.branchLocated };

    // Get current Manila time
    const nowInManila = toZonedTime(new Date(), "Asia/Manila");

    // Set up date ranges in Manila time
    const todayStart = new Date(nowInManila);
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);
    todayEnd.setHours(0, 0, 0, -1); // 23:59:59.999 of current day

    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(tomorrowStart.getDate() + 1);

    // returns an array
    const appointments = await Appointment.aggregate([
      {
        $match: branchCondition, //  match by branch globally FIRST
      },
      {
        $facet: {
          completed: [{ $match: { status: "completed" } }],
          today: [
            {
              $match: {
                status: "approved",
                dateTime: {
                  $gte: todayStart,
                  $lt: todayEnd,
                },
              },
            },
            {
              $sort: { dateTime: 1 },
            },
          ],
          upcoming: [
            {
              $match: {
                status: "approved",
                dateTime: { $gte: tomorrowStart },
              },
            },
            {
              $sort: { dateTime: 1 },
            },
          ],
          pending: [{ $match: { status: "pending" } }],
          canceled: [{ $match: { status: "canceled" } }],
          declined: [{ $match: { status: "declined" } }],
          total: [{ $count: "count" }],
        },
      },
    ]);

    const result = appointments[0];
    result.total = result.total[0]?.count || 0;

    res.status(200).json(result);
  } catch (error) {
    next(createError(500, "Failed to retrieve appointments"));
  }
};

const getAllAppointments = async (req, res, next) => {
  try {
    const {
      status,
      sort,
      time,
      date,
      createdAt,
      search,
      perPage,
      page = 1,
    } = req.query;

    const query = {};

    // always filter by branchLocated from the token
    // if the branchLocated is "all", then dont filter by branch
    if (req.admin.branchLocated !== "all") {
      query.branch = req.admin.branchLocated;
    }

    // filters
    if (status) query.status = status;
    if (time) query.time = time;
    if (date) query.date = date;
    if (createdAt) {
      const start = new Date(createdAt);
      const end = new Date(createdAt);
      end.setDate(end.getDate() + 1);
      query.createdAt = {
        $gte: start,
        $lt: end,
      };
    }

    // search
    if (search) {
      const regex = { $regex: search, $options: "i" };
      query.$or = [
        { firstname: regex },
        { lastname: regex },
        { selectedServices: regex },
        { email: regex },
        { phone: regex },
      ];
    }

    // pagination
    const limit = parseInt(perPage);
    const skip = (parseInt(page) - 1) * limit;

    // Ssrting
    const sortOptions = {
      oldest: { createdAt: 1 },
      latest: { createdAt: -1 },
      "a-z": { firstname: 1 },
      "z-a": { firstname: -1 },
    };

    const sortQuery = sortOptions[sort] || sortOptions.latest;

    // query database
    const [total, appointments] = await Promise.all([
      Appointment.countDocuments(query),
      Appointment.find(query)
        .skip(skip)
        .limit(limit)
        .sort(sortQuery)
        .populate([
          { path: "tracking.approved.by", select: "firstname lastname" },
          { path: "tracking.declined.by", select: "firstname lastname" },
          { path: "tracking.canceled.by", select: "firstname lastname" },
          { path: "tracking.completed.by", select: "firstname lastname" },
        ]),
      ,
    ]);

    console.log(query);

    res.status(200).json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      appointments,
    });
  } catch (error) {
    console.log(error);
    next(createError(500, "Failed to retrieve appointments"));
  }
};

const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { updatedStatus, additionalNote } = req.body;

    console.log(req.body);

    // check if the updatedStatus is valid
    if (
      !["approved", "declined", "canceled", "completed"].includes(updatedStatus)
    ) {
      return next(createError(400, "Invalid status value"));
    }

    // find the appointment
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return next(createError(404, "Appointment not found"));
    }

    // check if the appointment is already in the desired status
    if (appointment.status === updatedStatus) {
      return next(
        createError(400, `Appointment has already been ${updatedStatus}.`)
      );
    }

    // TESTING: Force error right before the actual update
    // throw new Error("Forced error for testing - DB update failed");

    // update the appointment status
    appointment.status = updatedStatus;

    const nowInManila = toZonedTime(new Date(), "Asia/Manila");

    switch (updatedStatus) {
      case "approved":
        await sendApprovalEmail({ appointment, additionalNote });
        appointment.tracking.approved = {
          by: req.admin.id,
          at: nowInManila,
          message: additionalNote,
        };
        break;

      case "declined":
        // await sendApprovalEmail({ appointment, additionalNote });
        appointment.tracking.declined = {
          by: req.admin.id,
          at: nowInManila,
          message: additionalNote,
        };
        break;

      case "canceled":
        // await sendApprovalEmail({ appointment, additionalNote });
        appointment.tracking.canceled = {
          by: req.admin.id,
          at: nowInManila,
          message: additionalNote,
        };
        break;

      case "completed":
        appointment.tracking.completed = {
          by: req.admin.id,
          at: nowInManila,
        };
        break;
    }

    await appointment.save();

    res
      .status(200)
      .json({ message: `Appointment has been successfully ${updatedStatus}.` });
  } catch (error) {
    console.log(error);

    const convertedStatus = {
      approved: "approving",
      declined: "declining",
      canceled: "canceling",
      completed: "completing",
    };

    const newStatus = convertedStatus[req.body.updatedStatus] || "updating";

    next(
      createError(500, `An error occurred while ${newStatus} the appointment.`)
    );
  }
};

module.exports = {
  createAppointment,
  getCategorizedAppointments,
  getAllAppointments,
  updateAppointmentStatus,
};
