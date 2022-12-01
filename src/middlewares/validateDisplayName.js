const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).send({
      message: '"displayName" length must be at least 8 characters long' });
  }
  if (!displayName) {
    return res.status(400).send({ message: '"displayName" is required' });
  }
  return next();
};

module.exports = {
  validateDisplayName,
};