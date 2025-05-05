const createError = require("http-errors");

const validateFields = (fields, isStrict = true) => {
  const allFieldsFilled = Object.values(fields).every((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value)
  );

  if (!allFieldsFilled) {
    if (isStrict) {
      throw createError(400, "All fields are required");
    } else {
      throw createError(400, "Required fields are missing");
    }
  }
};

const validateRole = (role) => {
  if (!["author", "admin", "head_admin"].includes(role)) {
    throw createError(400, "Invalid role value");
  }
};

const validateStatus = (status) => {
  if (!["active", "inactive"].includes(status)) {
    throw createError(400, "Invalid status value");
  }
};

const validateBranch = (branch) => {
  if (
    !["Dagupan City", "Vigan City", "Urdaneta City", "Mangaldan"].includes(
      branch
    )
  ) {
    throw createError(400, "Invalid branch value");
  }
};

module.exports = {
  validateFields,
  validateRole,
  validateStatus,
  validateBranch,
};
