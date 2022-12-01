const express = require('express');
const usersController = require('../controllers/users.controller');
const { validateDisplayName, validateEmail, validatePassword } = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/:id', usersController.getById);
userRouter.get('/', usersController.getAll);
userRouter.post('/',
validateDisplayName,
validateEmail,
validatePassword,
usersController.createUser);

module.exports = userRouter;
