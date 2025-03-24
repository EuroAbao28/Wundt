const Appointment = require("../models/appointmentModel");
const { validateFields } = require("../utils/validationField");
const createError = require("http-errors");

const createAppointment = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      date,
      time,
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
      selectedServices,
      comments,
    });

    // ensure appointment date is in the future
    if (new Date(date) < new Date()) {
      return next(createError(400, "Appointment date must be in the future"));
    }

    // check if an appointment with the same details already exists
    const existingAppointment = await Appointment.findOne({
      email,
      firstname,
      lastname,
      date,
      time,
    });
    if (existingAppointment) {
      return next(
        createError(409, "An appointment with the same details already exists")
      );
    }

    // create new appointment
    const newAppointment = await Appointment.create({
      firstname,
      lastname,
      phone,
      email,
      date,
      time,
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
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    next(createError(500, "Internal Server Error"));
  }
};

module.exports = { createAppointment, getAllAppointments };
