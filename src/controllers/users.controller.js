const UsersService = require('../services/users.service');
const { createToken } = require('../auth/validateJwt');

const error500Message = 'Ocorreu um erro';

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const newUser = await UsersService.createUser(data);
    const payload = { email: newUser.email, admin: false };
    const token = createToken(payload);
    return res.status(201).json({ token });
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersService.getById(id);
  
    if (!user) return res.status(404).json({ message: 'User does not exist' });

    return res.status(200).json(user);
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const getAll = async (_req, res) => {
  try {
    const users = await UsersService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.user;
    await UsersService.deleteUser(email);
    return res.status(204).json();
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `${error500Message}: ${error.message}` });
  }
};

module.exports = {
  createUser,
  getById,
  getAll,
  deleteUser,
};
