const express = require("express");
const { createAdmin, getAllAdmins } = require("../controllers/adminController");
const { upload } = require("../middleware/multerCloudinary");

const router = express.Router();

router
  .route("/")
  .post(upload.single("profilePic"), createAdmin)
  .get(getAllAdmins);

module.exports = router;
