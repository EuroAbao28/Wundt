const createError = require("http-errors");

// if no route matches
const routeNotFoundHandler = (req, res, next) => {
  next(createError(404, "Route not found"));
};

// global error
const globalErrorHandler = (err, req, res, next) => {
  console.log(err);

  // default catch error (if not provided)
  let statusCode = err.status || 500;
  let message = err.message || "Internal Server Error";

  // for the mongoose schema errors (email, phone)
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((error) => error.message)[0];
  }

  res.status(statusCode).json({ message });
};

module.exports = { routeNotFoundHandler, globalErrorHandler };
