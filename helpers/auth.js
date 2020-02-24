const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

exports.generateToken = (payload) => {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
  } catch (err) {
    throw new Error(err.message)
  }
};
