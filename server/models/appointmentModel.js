const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required"],
      trim: true,
      minlength: [2, "Firstname must be at least 2 characters long"],
      maxlength: [30, "Firstname cannot exceed 30 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required"],
      trim: true,
      minlength: [2, "Lastname must be at least 2 characters long"],
      maxlength: [30, "Lastname cannot exceed 30 characters"],
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
      type: String,
      required: [true, "Appointment date is required"],
      trim: true,
    },
    time: {
      type: String,
      required: [true, "Appointment time is required"],
      trim: true,
    },
    dateTime: {
      type: Date,
      required: [true, "Appointment date is required"],
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
      enum: ["completed", "approved", "pending", "declined", "canceled"],
      default: "pending",
    },

    // for tracking the status
    tracking: {
      approved: {
        by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          default: null,
        },
        at: { type: Date, default: null },
        message: { type: String, trim: true, default: null },
      },
      declined: {
        by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          default: null,
        },
        at: { type: Date, default: null },
        message: { type: String, trim: true, default: null },
      },
      canceled: {
        by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          default: null,
        },
        at: { type: Date, default: null },
        message: { type: String, trim: true, default: null },
      },
      completed: {
        by: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Admin",
          default: null,
        },
        at: { type: Date, default: null },
      },
    },
  },
  { timestamps: true }
);

// for Faster Queries
appointmentSchema.index({ email: 1 });
appointmentSchema.index({ date: 1 });

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
