const Appointment = require("../models/appointmentModel");
const sendApprovalEmail = require("../utils/emailService");
const { validateFields } = require("../utils/validationField");
const createError = require("http-errors");
const { parseISO, isBefore, addMinutes, format } = require("date-fns");

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

    console.log(req.body);

    // combine date and time into a single string
    const appointmentDateTimeString = `${date}T${time.split(" ")[0]}:00`;

    // parse the date and time string into a Date object
    const appointmentDateTime = parseISO(appointmentDateTimeString);

    // adjust the appointment time to the local time zone
    const localDateTime = addMinutes(
      appointmentDateTime,
      appointmentDateTime.getTimezoneOffset()
    );

    // get the current time and adjust to local time zone
    const currentLocalTime = addMinutes(
      new Date(),
      new Date().getTimezoneOffset()
    );

    console.log("String", appointmentDateTimeString);
    console.log("Appointment Date Object", appointmentDateTime);
    console.log("Adjusted Appointment Time (Local)", localDateTime);
    console.log("Current Local Time", currentLocalTime);

    // SO BASICALLY THE CODE ABOVE IS COMBINING THE DATE AND TIME FROM REQ.BODY
    // FORMTTED TO A DATE OBJECT
    // SO WE CAN COMPARE IT CURRENT DATE AND TIME IF ITS IN THE FUTURE

    // ensure appointment date is in the future
    if (isBefore(localDateTime, currentLocalTime)) {
      return next(createError(400, "Appointment date must be in the future"));
    }

    // check if an appointment with the same details already exists
    // const existingAppointment = await Appointment.findOne({
    //   email,
    //   firstname,
    //   lastname,
    //   date,
    //   time,
    // });
    // if (existingAppointment) {
    //   return next(
    //     createError(409, "An appointment with the same details already exists")
    //   );
    // }

    // create new appointment
    const newAppointment = await Appointment.create({
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
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // returns an array
    const appointments = await Appointment.aggregate([
      {
        $facet: {
          completed: [{ $match: { status: "completed" } }],
          today: [
            {
              $match: {
                status: "approved",
                date: { $gte: today, $lt: tomorrow },
              },
            },
          ],
          upcoming: [
            {
              $match: {
                status: "approved",
                date: { $gte: tomorrow },
              },
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
    const { status, time, date, createdAt, sort, search, page = 1 } = req.query;

    const query = {};

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
    const limit = 20;
    const skip = (parseInt(page) - 1) * limit;

    // sort
    let sortQuery = {};
    if (sort) {
      if (sort === "oldest") {
        sortQuery.createdAt = 1;
      } else if (sort === "latest") {
        sortQuery.createdAt = -1;
      } else if (sort === "a-z") {
        sortQuery.firstname = 1;
      } else if (sort === "z-a") {
        sortQuery.firstname = -1;
      }
    }

    // query database
    const [total, appointments] = await Promise.all([
      Appointment.countDocuments(query),
      Appointment.find(query).skip(skip).limit(limit).sort(sortQuery),
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
    const { updatedStatus } = req.body;

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
      return next(createError(400, `Appointment is already ${updatedStatus}`));
    }

    // update the appointment status
    appointment.status = updatedStatus;
    await appointment.save();

    // send an email for approval
    if (updatedStatus === "approved") {
      await sendApprovalEmail(appointment);
    }

    res
      .status(200)
      .json({ message: `Appointment ${updatedStatus} successfully` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createAppointment,
  getCategorizedAppointments,
  getAllAppointments,
  updateAppointmentStatus,
};
