const express = require('express');
const blogPostController = require('../controllers/blogPosts.controller');
const { validateToken } = require('../auth/validateJwt');
const { validatePost,
  validateIdPost, validateIdCategory, validateIdUser, validateUpPost,
} = require('../middlewares');

const blogPostRouter = express.Router();

blogPostRouter.get('/:id',
  validateToken,
  validateIdPost,
  blogPostController.getById);
blogPostRouter.get('/', validateToken, blogPostController.getAll);
blogPostRouter.post('/',
  validateToken,
  validatePost,
  validateIdCategory,
  blogPostController.createBlogPost);
blogPostRouter.put('/:id',
  validateToken,
  validateIdUser,
  validateUpPost,
  blogPostController.updateBlogPost);

module.exports = blogPostRouter;
