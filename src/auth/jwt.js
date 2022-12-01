require('dotenv/config');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};