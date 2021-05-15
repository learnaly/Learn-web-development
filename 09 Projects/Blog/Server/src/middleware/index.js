const validate = require('./validate.middleware');
const auth = require('./auth.middleware');
const error = require('./error.middleware');
const authenticate = require('./authenticate.middleware');

module.exports = {
  error,
  validate,
  auth,
  authenticate,
};
