const createError = require("http-errors");

const validateAppointmentFields = (fields) => {
  const allFieldsFilled = Object.values(fields).every((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value)
  );

  if (!allFieldsFilled) {
    throw createError(400, "All fields are required");
  }
};

const validateAdminFields = (fields) => {
  const allFieldsFilled = Object.values(fields).every(Boolean);

  if (!allFieldsFilled) {
    throw createError(400, "Some required fields are missing");
  }
};

const validateRole = (role = "admin") => {
  if (!["admin", "super_admin"].includes(role)) {
    throw createError(400, "Invalid role value");
  }
};

module.exports = {
  validateAppointmentFields,
  validateAdminFields,
  validateRole,
};
