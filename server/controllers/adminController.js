const Admin = require("../models/adminModel");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const {
  validateRole,
  validateAdminFields,
} = require("../utils/validationField");
const { isValidFileType } = require("../utils/validationFile");
const { uploadImageToCloudinary } = require("../utils/cloudinaryUtils");

// create admin
const createAdmin = async (req, res, next) => {
  try {
    const { firstname, middlename, lastname, email, phone, password, role } =
      req.body;

    // validate required fields
    validateAdminFields({ firstname, lastname, email, phone, password });

    // check if email already exists
    const isAdminAlreadyExist = await Admin.findOne({ email });
    if (isAdminAlreadyExist) {
      return next(createError(409, "Email already exists"));
    }

    // validate role
    validateRole(role);

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // upload profile picture to cloudinary (if provided)
    let profilePicUrl = "";
    if (req.file) {
      try {
        // validate file type
        if (!isValidFileType(req.file.mimetype)) {
          return next(
            createError(400, "Invalid file type. Only images are allowed")
          );
        }

        // upload the image
        profilePicUrl = await uploadImageToCloudinary(req.file.buffer);
      } catch (error) {
        return next(error);
      }
    }

    // create the admin
    const newAdmin = new Admin({
      firstname,
      middlename,
      lastname,
      email,
      phone,
      password: hashedPassword,
      role,
      profilePic: profilePicUrl,
    });

    await newAdmin.save();

    return res
      .status(201)
      .json({ message: "Admin created successfully.", admin: newAdmin });
  } catch (error) {
    next(createError(500, "Failed to create admin. Please try again"));
  }
};

// get all admins
const getAllAdmins = async (req, res, next) => {
  try {
    // fetch all admins from the database, excluding the password field
    const admins = await Admin.find({}).select("-password");

    return res.status(200).json({
      message: "Admins fetched successfully.",
      data: admins,
    });
  } catch (error) {
    next(createError(500, "Failed to fetch admins. Please try again"));
  }
};

module.exports = { createAdmin, getAllAdmins };
