const CategoriesService = require('../services/categories.service');

const validateIdCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const allCategories = await CategoriesService.getAll();
  const allIdCategories = allCategories.map((category) => category.id);
  const checkId = allIdCategories.every((id) => categoryIds.includes(id));

  if (!checkId) {
    return res.status(400).send({ message: 'one or more "categoryIds" not found' });
  }
  
  return next();
};

module.exports = {
  validateIdCategory,
};