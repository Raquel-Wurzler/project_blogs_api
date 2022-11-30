const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getById = async (id) => {
  const category = await Category.findByPk(id);

  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  getById,
  getAll,
};