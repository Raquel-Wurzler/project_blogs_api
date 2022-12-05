const BlogPostsService = require('../services/blogPosts.service');

const validateSearch = async (req, res, next) => {
  const { q } = req.query;
  const allBlogPost = await BlogPostsService.getAll();

  if (!q) {
    return res.status(200).json(allBlogPost);
  }
  if (q === undefined) {
    return res.status(200).json([]);
  }
  
  return next();
};

module.exports = {
  validateSearch,
};