const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const authenticateToken = async (req, res, next) => {
  try {
    // get token from authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return next(createError(401, "Access denied, token missing"));

    // verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach the decoded token which is the (id, role) to the req
    // to access it in the controller (req.admin)
    req.admin = decoded;

    // proceed to the next middleware or route handler
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticateToken;
