const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).send({
      message: '"password" length must be at least 6 characters long' });
  }
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  return next();
};

module.exports = { validatePassword };