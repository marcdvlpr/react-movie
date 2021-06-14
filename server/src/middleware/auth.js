const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token')

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'You are not logged in! Please log in to get access' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;

    next();
  } catch (err) {
    res
      .status(401)
      .json({ msg: 'Token is not valid' });
  }
};
