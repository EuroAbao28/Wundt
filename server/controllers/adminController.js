const Admin = require("../models/adminModel");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateRole, validateFields } = require("../utils/validationField");
const { isValidFileType } = require("../utils/validationFile");
const { uploadImageToCloudinary } = require("../utils/cloudinaryUtils");

// create admin
const createAdmin = async (req, res, next) => {
  try {
    const { firstname, middlename, lastname, email, phone, password, role } =
      req.body;

    // validate required fields
    validateFields({ firstname, lastname, email, phone, password }, false);

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
    next(error);
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // validate required fields
    validateFields({ email, password });

    // check if admin exist
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return next(createError(401, "Invalid email or password"));
    }

    // compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return next(createError(401, "Invalid email or password"));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        firstname: admin.firstname,
        lastname: admin.lastname,
        email: admin.email,
        role: admin.role,
        profilePic: admin.profilePic,
      },
    });
  } catch (error) {
    next(error);
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

module.exports = { createAdmin, getAllAdmins, loginAdmin };
