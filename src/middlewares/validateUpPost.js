const validateUpPost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  validateUpPost,
};