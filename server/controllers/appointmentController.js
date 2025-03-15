const Appointment = require("../models/appointmentModel");

const createAppointment = async (req, res) => {
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

    // validate the fields
    if (
      !firstname ||
      !lastname ||
      !phone ||
      !email ||
      !date ||
      !time ||
      !selectedServices ||
      !comments
    )
      return res.status(400).json({ message: "All fields are required" });

    // Ensure appointment date is in the future
    const appointmentDate = new Date(date);
    const now = new Date();
    if (appointmentDate < now) {
      return res
        .status(400)
        .json({ message: "Appointment date must be in the future" });
    }

    // Create new appointment
    const newAppointment = await Appointment.create({
      firstname,
      lastname,
      phone,
      email,
      date,
      time,
      selectedServices,
      comments,
      status: "pending", // set the default status
    });

    res.status(201).json({
      message: "Appointment created successfully",
      appointment: newAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching all appointments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createAppointment, getAllAppointments };
