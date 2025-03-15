const express = require("express");
const {
  createAppointment,
  getAllAppointments,
} = require("../controllers/appointmentController");

const router = express.Router();

// router.post("/", createAppointment);
router.route("/").post(createAppointment).get(getAllAppointments);

module.exports = router;
