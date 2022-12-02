const BlogPostsService = require('../services/blogPosts.service');

const validateIdPost = async (req, res, next) => {
  const { id } = req.params;
  const blogPost = await BlogPostsService.getById(id);

  if (!blogPost) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  
  return next();
};

module.exports = {
  validateIdPost,
};