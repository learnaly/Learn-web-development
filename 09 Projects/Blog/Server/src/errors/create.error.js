const APIError = require('./api.error');

class CreateError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'CreateError';
  }

}

module.exports = CreateError;
