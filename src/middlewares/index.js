const { validateDisplayName } = require('./validateDisplayName');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateName } = require('./validateName');
const { validatePost } = require('./validatePost');
const { validateIdPost } = require('./validateIdPost');
const { validateIdCategory } = require('./validateIdCategory');
const { validateIdUser } = require('./validateIdUser');
const { validateUpPost } = require('./validateUpPost');
const { validateSearch } = require('./validateSearch');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateName,
  validatePost,
  validateIdPost,
  validateIdCategory,
  validateIdUser,
  validateUpPost,
  validateSearch,
};