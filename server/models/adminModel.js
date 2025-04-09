const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is required"],
      trim: true,
      minlength: [2, "Firstname must be at least 2 characters long"],
      maxlength: [50, "Firstname cannot exceed 50 characters"],
    },
    middlename: {
      type: String,
      trim: true,
      maxlength: [50, "Middlename cannot exceed 50 characters"],
      default: "",
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required"],
      trim: true,
      minlength: [2, "Lastname must be at least 2 characters long"],
      maxlength: [50, "Lastname cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^(?:\+63|0)9\d{9}$/, "Invalid phone number format"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "head_admin"],
      default: "admin",
    },
    // branch: {
    //   type: String,
    //   required: [true, "Branch is required"],
    //   enum: ["Dagupan City", "Vigan City", "Urdaneta City", "Mangaldan", "All"],
    // },
    profilePic: {
      type: String,
      default: "", // Cloudinary URL will be stored here
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
