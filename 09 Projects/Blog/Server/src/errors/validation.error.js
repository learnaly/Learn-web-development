const APIError = require('./api.error');

class ValidationError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'ValidationError';
  }

}

module.exports = ValidationError;
