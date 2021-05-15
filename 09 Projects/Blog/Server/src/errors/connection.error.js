const APIError = require('./api.error');

class ConnectionError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'ConnectionError';
  }

}

module.exports = ConnectionError;
