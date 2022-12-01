const UsersService = require('../services/users.service');
const { createToken } = require('../auth/jwt');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UsersService.getByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }
    const payload = { email, admin: false };
    const token = createToken(payload);
    return res.status(200).json({ token });
  } catch (error) {
    console.info(error);
    return res.status(500).json({ message: `Ocorreu um erro: ${error.message}` });
  }
};

module.exports = {
  login,
};