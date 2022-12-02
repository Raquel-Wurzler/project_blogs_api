const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { validateToken } = require('../auth/validateJwt');
const { validateName } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.get('/:id', categoriesController.getById);
categoryRouter.get('/', validateToken, categoriesController.getAll);
categoryRouter.post('/',
  validateToken,
  validateName,
  categoriesController.createCategory);

module.exports = categoryRouter;
