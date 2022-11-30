const { BlogPosts } = require('../models');

const createBlogPost = async (data) => {
  const newBlogPost = await BlogPosts.create(data);

  return newBlogPost;
};

const getById = async (id) => {
  const blogPost = await BlogPosts.findByPk(id);

  return blogPost;
};

const getAll = async () => {
  const blogPosts = await BlogPosts.findAll();

  return blogPosts;
};

module.exports = {
  createBlogPost,
  getById,
  getAll,
};