const express = require('express');
const usersController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter.get('/:id', usersController.getById);
userRouter.get('/', usersController.getAll);
userRouter.post('/', usersController.createUser);

module.exports = userRouter;
