require('dotenv/config');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send({ message: 'Expired or invalid token' }); 
  }
  return next();
};

module.exports = {
  createToken,
  validateToken,
};