const Admin = require("../models/adminModel");
const { cloudinary } = require("../middleware/multerCloudinary");
const bcrypt = require("bcrypt");

// Helper function to upload image to Cloudinary
// const uploadImageToCloudinary = async (fileBuffer) => {
//   return new Promise((resolve, reject) => {
//     const uploadStream = cloudinary.uploader.upload_stream(
//       {
//         folder: "Wundt/admin",
//         resource_type: "image",
//       },
//       (error, result) => {
//         if (error) {
//           reject(new Error("Image upload failed"));
//         } else {
//           resolve(result.secure_url);
//         }
//       }
//     );

//     uploadStream.end(fileBuffer);
//   });
// };

const uploadImageToCloudinary = async (fileBuffer) => {
  try {
    const result = await cloudinary.uploader.upload(fileBuffer, {
      folder: "Wundt/admin",
      resource_type: "image",
    });
    return result.secure_url;
  } catch (error) {
    throw new Error("Image upload failed");
  }
};


// Helper function to validate required fields
const validateRequiredFields = (fields) => {
  const { firstname, lastname, email, phone, password } = fields;
  if (!firstname || !lastname || !email || !phone || !password) {
    throw new Error("All required fields must be filled");
  }
};

// Helper function to validate role
const validateRole = (role) => {
  const allowedRoles = ["admin", "super_admin"];
  if (role && !allowedRoles.includes(role)) {
    throw new Error("Invalid role value");
  }
};

// Main controller function
const createAdmin = async (req, res) => {
  try {
    const { firstname, middlename, lastname, email, phone, password, role } =
      req.body;

    // Validate required fields
    validateRequiredFields({ firstname, lastname, email, phone, password });

    // Validate role
    validateRole(role);

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload image to Cloudinary if provided
    let profilePicUrl = "";
    if (req.file) {
      try {
        console.log({ TANGA: req.file });
        profilePicUrl = await uploadImageToCloudinary(req.file.buffer);
      } catch (error) {
        console.error("Cloudinary upload error:", error);
        return res.status(500).json({ message: "Image upload failed" });
      }
    }

    // Create the admin
    const newAdmin = new Admin({
      firstname,
      middlename,
      lastname,
      email,
      phone,
      password: hashedPassword,
      role: role || "admin", // Default to "admin" if not provided
      profilePic: profilePicUrl, // Empty string if no image
    });

    await newAdmin.save();

    // Return success response
    return res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    console.error("Error creating admin:", error);
    return res
      .status(500)
      .json({ message: error.message || "Internal server error" });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    // Fetch all admins from the database, excluding the password field
    const admins = await Admin.find({}).select("-password");

    // Return the admins in the response
    return res.status(200).json({
      message: "Admins fetched successfully",
      data: admins,
    });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createAdmin, getAllAdmins };
