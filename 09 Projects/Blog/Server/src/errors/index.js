const ValidationError = require('./validation.error');
const AuthenticationError = require('./authentication.error');
const PermissionError = require('./permission.error');
const NotFoundError = require('./notfound.error');

module.exports = {
  ValidationError,
  AuthenticationError,
  PermissionError,
  NotFoundError,
};
