const { User } = require('../models');

const createUser = async (data) => {
  const newUser = await User.create(data);

  return newUser;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  getById,
  getAll,
  getByEmail,
};
