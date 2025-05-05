const express = require("express");
const {
  createAdmin,
  getAllAdmins,
  loginAdmin,
  getCurrentAdmin,
  getAdminById,
} = require("../controllers/adminController");
const { upload } = require("../middleware/multerCloudinary");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .post(upload.single("profilePic"), authenticateToken, createAdmin)
  .get(authenticateToken, getAllAdmins);
router.post("/login", loginAdmin);
router.get("/current-admin", authenticateToken, getCurrentAdmin);
router.get("/get-admin", authenticateToken, getAdminById);

module.exports = router;
