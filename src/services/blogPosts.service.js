const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const UsersService = require('./users.service');
const { BlogPost, User, Category, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const createBlogPost = async (data, email) => {
  const { categoryIds, title, content } = data;
  try {
    const { id } = await UsersService.getByEmail(email);
    const result = await sequelize.transaction(async (t) => {
      const newBlogPost = await BlogPost.create(
        { title, content, userId: id }, { transaction: t },
      );
      const { dataValues } = newBlogPost;
      const mapCatedoryIds = categoryIds.map((categoryId) => (
        { postId: dataValues.id, categoryId }));
      await PostCategory.bulkCreate(mapCatedoryIds, { transaction: t });
      return newBlogPost;
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
] });

  return blogPost;
};

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

  return blogPosts;
};

const updateBlogPost = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const updatedBlogPost = await getById(id);
  return updatedBlogPost;
};

const deleteBlogPost = async (id) => {
  const post = await BlogPost.destroy({ where: { id } });
  return post;
};

const searchBlogPost = async (searchTerm) => {
  const blogPosts = await BlogPost.findAll({
    where: { [Op.or]: [
      { title: { [Op.substring]: searchTerm } },
      { content: { [Op.substring]: searchTerm } },
    ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });

  return blogPosts;
};

module.exports = {
  createBlogPost,
  getById,
  getAll,
  updateBlogPost,
  deleteBlogPost,
  searchBlogPost,
};