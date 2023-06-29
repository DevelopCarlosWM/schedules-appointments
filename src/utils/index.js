const jwt = require('jsonwebtoken');

const generateAccessToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '3h' });
};

module.exports = { generateAccessToken };
