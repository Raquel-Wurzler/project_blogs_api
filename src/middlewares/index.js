const { validateDisplayName } = require('./validateDisplayName');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateName } = require('./validateName');
const { validatePost } = require('./validatePost');
const { validateIdPost } = require('./validateIdPost');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateName,
  validatePost,
  validateIdPost,
};