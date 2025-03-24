const express = require("express");
const {
  createAdmin,
  getAllAdmins,
  loginAdmin,
} = require("../controllers/adminController");
const { upload } = require("../middleware/multerCloudinary");

const router = express.Router();

router
  .route("/")
  .post(upload.single("profilePic"), createAdmin)
  .get(getAllAdmins);
router.post("/login", loginAdmin);

module.exports = router;
