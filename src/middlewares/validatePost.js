const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }
  if (categoryIds.length === 0) {
    return res.status(400).send({ message: 'one or more "categoryIds" not found' });
  }
  return next();
};

module.exports = {
  validatePost,
};