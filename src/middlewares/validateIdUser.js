const BlogPostsService = require('../services/blogPosts.service');
const UsersService = require('../services/users.service');

const validateIdUser = async (req, res, next) => {
  const { id } = req.params;
  const { email } = req.user;
  const postData = await BlogPostsService.getById(id);
  const userData = await UsersService.getByEmail(email);
  if (postData.dataValues.userId !== userData.dataValues.id) {
    return res.status(401).send({ message: 'Unauthorized user' });
  }
  return next();
};

module.exports = {
  validateIdUser,
};