const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const http = require("http");
const { Server } = require("socket.io");
const {
  routeNotFoundHandler,
  globalErrorHandler,
} = require("./middleware/errorHandler");

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

// error-handling middleware
app.use(routeNotFoundHandler);
app.use(globalErrorHandler);

// create a server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// socket io event
io.on("connection", (socket) => {
  console.log(`New user connected: ${socket.id}`);

  // handle disconnect
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// start the server
server.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`.yellow.underline)
);
