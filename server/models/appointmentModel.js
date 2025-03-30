const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required"],
      trim: true,
      minlength: [2, "Firstname must be at least 2 characters long"],
      maxlength: [50, "Firstname cannot exceed 50 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required"],
      trim: true,
      minlength: [2, "Lastname must be at least 2 characters long"],
      maxlength: [50, "Lastname cannot exceed 50 characters"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^(?:\+63|0)9\d{9}$/, "Invalid phone number format"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    date: {
      type: Date,
      required: [true, "Appointment date is required"],
    },
    time: {
      type: String,
      required: [true, "Appointment time is required"],
      trim: true,
    },
    branch: {
      type: String,
      required: [true, "Branch is required"],
      enum: ["Dagupan City", "Vigan City", "Urdaneta City", "Mangaldan"],
    },
    selectedServices: {
      type: [String],
      required: [true, "At least one service must be selected"],
    },
    comments: {
      type: String,
      required: [true, "Comments are required"],
      trim: true,
      maxlength: [700, "Comments cannot exceed 700 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// for Faster Queries
appointmentSchema.index({ email: 1 });
appointmentSchema.index({ date: 1 });

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
