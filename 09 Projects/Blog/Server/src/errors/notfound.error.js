const APIError = require('./api.error');

class NotFoundError extends APIError {

  constructor(
    message = 'Not found'
  ) {
    super(message);
    this.name = 'NotFoundError';
  }

}

module.exports = NotFoundError;
