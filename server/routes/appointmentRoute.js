const express = require("express");
const {
  createAppointment,
  getAllAppointments,
  approveAppointment,
} = require("../controllers/appointmentController");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// router.post("/", createAppointment);
router
  .route("/")
  .post(createAppointment)
  .get(authenticateToken, getAllAppointments);

router.patch("/approve/:id", approveAppointment);

module.exports = router;
