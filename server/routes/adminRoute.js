const express = require("express");
const {
  createAdmin,
  getAllAdmins,
  loginAdmin,
  getCurrentAdmin,
} = require("../controllers/adminController");
const { upload } = require("../middleware/multerCloudinary");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .post(upload.single("profilePic"), createAdmin)
  .get(getAllAdmins);
router.post("/login", loginAdmin);
router.get("/current-admin", authenticateToken, getCurrentAdmin);

module.exports = router;
