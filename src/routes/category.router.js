const express = require('express');
const categoriesController = require('../controllers/categories.controller');

const categoryRouter = express.Router();

categoryRouter.get('/:id', categoriesController.getById);
categoryRouter.get('/', categoriesController.getAll);
categoryRouter.post('/', categoriesController.createCategory);

module.exports = categoryRouter;
