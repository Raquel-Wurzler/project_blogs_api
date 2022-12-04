const express = require('express');
const usersController = require('../controllers/users.controller');
const { validateDisplayName,
  validateEmail, validatePassword,
} = require('../middlewares');
const { validateToken } = require('../auth/validateJwt');

const userRouter = express.Router();

userRouter.get('/:id', validateToken, usersController.getById);
userRouter.get('/', validateToken, usersController.getAll);
userRouter.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  usersController.createUser);
userRouter.delete('/me',
  validateToken,
  usersController.deleteUser);

module.exports = userRouter;
