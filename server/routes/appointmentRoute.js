const express = require("express");
const {
  createAppointment,
  getAllAppointments,
} = require("../controllers/appointmentController");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// router.post("/", createAppointment);
router
  .route("/")
  .post(createAppointment)
  .get(authenticateToken, getAllAppointments);

module.exports = router;
