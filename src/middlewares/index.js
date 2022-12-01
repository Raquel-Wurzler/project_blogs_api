const { validateDisplayName } = require('./validateDisplayName');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateName } = require('./validateName');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateName,
};