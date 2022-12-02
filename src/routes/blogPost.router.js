const express = require('express');
const blogPostController = require('../controllers/blogPosts.controller');
const { validateToken } = require('../auth/validateJwt');
const { validatePost, validateIdPost } = require('../middlewares');

const blogPostRouter = express.Router();

blogPostRouter.get('/:id',
  validateToken,
  validateIdPost,
  blogPostController.getById);
blogPostRouter.get('/', validateToken, blogPostController.getAll);
blogPostRouter.post('/',
  validateToken,
  validatePost,
  blogPostController.createBlogPost);

module.exports = blogPostRouter;
