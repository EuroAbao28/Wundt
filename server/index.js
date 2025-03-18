const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");

require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/appointment", require("./routes/appointmentRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// start the server
app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.yellow.underline)
);
