const APIError = require('./api.error');

class DeveloperError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'DeveloperError';
  }

}

module.exports = DeveloperError;
