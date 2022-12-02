const express = require('express');
const blogPostController = require('../controllers/blogPosts.controller');
const { validateToken } = require('../auth/validateJwt');
const { validatePost } = require('../middlewares/validatePost');

const blogPostRouter = express.Router();

blogPostRouter.get('/:id', blogPostController.getById);
blogPostRouter.get('/', validateToken, blogPostController.getAll);
blogPostRouter.post('/',
  validateToken,
  validatePost,
  blogPostController.createBlogPost);

module.exports = blogPostRouter;
