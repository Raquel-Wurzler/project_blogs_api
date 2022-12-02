const { BlogPost, User, Category } = require('../models');

const createBlogPost = async (data) => {
  const newBlogPost = await BlogPost.create(data);

  return newBlogPost;
};

const getById = async (id) => {
  const blogPost = await BlogPost.findByPk(id);

  return blogPost;
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  return blogPosts;
};

module.exports = {
  createBlogPost,
  getById,
  getAll,
};