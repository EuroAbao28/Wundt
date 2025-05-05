const Admin = require("../models/adminModel");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validateRole,
  validateFields,
  validateBranch,
  validateStatus,
} = require("../utils/validationField");
const { isValidFileType } = require("../utils/validationFile");
const { uploadImageToCloudinary } = require("../utils/cloudinaryUtils");

// create admin
const createAdmin = async (req, res, next) => {
  try {
    const {
      firstname,
      middlename,
      lastname,
      email,
      phone,
      password,
      role,
      status,
      branchLocated,
    } = req.body;

    // check if the request if from the "head_admin" only
    if (req.admin.role !== "head_admin") {
      return next(
        createError(
          403,
          "Access denied. You do not have permission to perform this action."
        )
      );
    }

    // validate required fields
    validateFields({ firstname, lastname, email, phone, password }, false);

    // check if email already exists
    const isAdminAlreadyExist = await Admin.findOne({ email });
    if (isAdminAlreadyExist) {
      return next(createError(409, "Email already exists"));
    }

    // validate role
    validateRole(role);

    // validate status
    validateStatus(status);

    // validate branch
    validateBranch(branchLocated);

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // upload profile picture to cloudinary (if provided)
    let profilePicUrl = "";
    if (req.file) {
      console.log(req.file);

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
      status,
      branchLocated,
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

// login admin
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
      { id: admin._id, role: admin.role, branchLocated: admin.branchLocated },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        firstname: admin.firstname,
        middlename: admin.middlename,
        lastname: admin.lastname,
        email: admin.email,
        phone: admin.phone,
        role: admin.role,
        profilePic: admin.profilePic,
      },
    });
  } catch (error) {
    next(error);
  }
};

// get current admin
const getCurrentAdmin = async (req, res, next) => {
  try {
    // get the admin ID from the authenticated request
    const adminId = req.admin.id;

    // find the admin in the database
    const admin = await Admin.findById(adminId).select("-password");

    if (!admin) return next(createError(404, "Admin not found"));

    res.status(200).json({
      message: "Admin fetched successfully",
      admin,
    });
  } catch (error) {
    next(error);
  }
};

// get all admins
const getAllAdmins = async (req, res, next) => {
  try {
    const {
      status,
      sort,
      role,
      branchLocated,
      createdAt,
      search,
      perPage,
      page = 1,
    } = req.query;

    // just the "head_admin" can only use this route
    if (req.admin.role !== "head_admin") {
      return next(
        createError(
          403,
          "Access denied. You do not have permission to perform this action."
        )
      );
    }

    const query = {};

    // filters
    if (status) query.status = status;
    if (role) query.role = role;
    if (branchLocated) query.branchLocated = branchLocated;
    if (createdAt) {
      const start = new Date(createdAt);
      const end = new Date(createdAt);
      end.setDate(end.getDate() + 1);
      query.createdAt = {
        $gte: start,
        $lt: end,
      };
    }

    // search
    if (search) {
      const regex = { $regex: search, $options: "i" };
      query.$or = [
        { firstname: regex },
        { middlename: regex },
        { lastname: regex },
        { email: regex },
        { phone: regex },
      ];
    }

    // pagination
    const limit = parseInt(perPage);
    const skip = (parseInt(page) - 1) * limit;

    // Sorting
    const sortOptions = {
      oldest: { createdAt: 1 },
      latest: { createdAt: -1 },
      "a-z": { firstname: 1 },
      "z-a": { firstname: -1 },
    };

    const sortQuery = sortOptions[sort] || sortOptions.latest;

    // query database
    const [total, admins] = await Promise.all([
      Admin.countDocuments({ ...query, _id: { $ne: req.admin.id } }),
      Admin.find({ ...query, _id: { $ne: req.admin.id } })
        .skip(skip)
        .limit(limit)
        .sort(sortQuery)
        .select("-password"),
    ]);

    return res.status(200).json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      admins,
    });
  } catch (error) {
    next(createError(500, "Failed to fetch admins. Please try again"));
  }
};

const getAdminById = async (req, res, next) => {
  try {
    console.log("GET ADMIN BY ID", req.admin);

    // only head_admin can access this route
    if (req.admin.role !== "head_admin") {
      return next(
        createError(
          403,
          "Access denied. You do not have permission to perform this action."
        )
      );
    }

    const { id } = req.params;

    // validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid admin ID format"));
    }

    const admin = await Admin.findOne({
      _id: id,
    }).select("-password");

    if (!admin) {
      return next(createError(404, "Admin not found"));
    }

    return res.status(200).json({
      message: "Admin fetched successfully",
      data: admin,
    });
  } catch (error) {
    console.error("Error fetching admin:", error);
    next(createError(500, "Failed to fetch admin. Please try again"));
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  loginAdmin,
  getCurrentAdmin,
  getAdminById,
};
