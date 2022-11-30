const CategoriesService = require('../services/categories.service');

const error500Message = 'Ocorreu um erro';

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await CategoriesService.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoriesService.getById(id);
  
    if (!category) return res.status(404).json({ message: 'Category not found' });

    return res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await CategoriesService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

module.exports = {
  createCategory,
  getById,
  getAll,
};
