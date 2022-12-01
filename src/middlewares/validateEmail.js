const UsersService = require('../services/users.service');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await UsersService.getByEmail(email);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email.match(regex)) {
    return res.status(400).send({ message: '"email" must be a valid email' });
  }
  if (!email) {
    return res.status(400).send({ message: '"email" is required' });
  }
  if (user !== null) {
    return res.status(409).send({ message: 'User already registered' });
  }
  return next();
};

module.exports = { validateEmail };