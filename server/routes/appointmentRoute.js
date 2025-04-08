const express = require("express");
const {
  createAppointment,
  updateAppointmentStatus,
  getCategorizedAppointments,
  getAllAppointments,
} = require("../controllers/appointmentController");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .post(createAppointment)
  .get(authenticateToken, getAllAppointments);

router.patch("/updated-status/:id", authenticateToken, updateAppointmentStatus);

router.get("/categorized", authenticateToken, getCategorizedAppointments);

module.exports = router;
