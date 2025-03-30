const Appointment = require("../models/appointmentModel");
const sendApprovalEmail = require("../utils/emailService");
const { validateFields } = require("../utils/validationField");
const createError = require("http-errors");
const nodemailer = require("nodemailer");

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

    // ensure appointment date is in the future
    if (new Date(date) < new Date()) {
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

const getAllAppointments = async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointments = await Appointment.aggregate([
      {
        $facet: {
          pending: [{ $match: { status: "pending" } }],
          canceled: [{ $match: { status: "canceled" } }],
          today: [
            {
              $match: {
                status: "confirmed",
                date: { $gte: today, $lt: tomorrow },
              },
            },
          ],
          upcoming: [
            {
              $match: {
                status: "confirmed",
                date: { $gte: tomorrow },
              },
            },
          ],
        },
      },
    ]);

    res.status(200).json(appointments[0]);
  } catch (error) {
    next(createError(500, "Failed to retrieve appointments"));
  }
};

const approveAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    // Find appointment
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Check if already confirmed
    if (appointment.status === "confirmed") {
      return res
        .status(400)
        .json({ message: "Appointment is already confirmed" });
    }

    // Update status to "confirmed"
    appointment.status = "confirmed";
    await appointment.save();

    // Send email notification
    await sendApprovalEmail(appointment);

    res.status(200).json({ message: "Appointment approved successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { createAppointment, getAllAppointments, approveAppointment };
