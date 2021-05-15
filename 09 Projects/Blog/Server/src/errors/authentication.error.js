const APIError = require('./api.error');

class AuthenticationError extends APIError {

  constructor(
    message = 'Unauthorized'
  ) {
    super(message);
    this.name = 'AuthenticationError';
  }

}

module.exports = AuthenticationError;
