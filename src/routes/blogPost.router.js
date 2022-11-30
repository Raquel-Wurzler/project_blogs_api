const express = require('express');
const blogPostController = require('../controllers/blogPosts.controller');

const blogPostRouter = express.Router();

blogPostRouter.get('/:id', blogPostController.getById);
blogPostRouter.get('/', blogPostController.getAll);
blogPostRouter.post('/', blogPostController.createBlogPost);

module.exports = blogPostRouter;
