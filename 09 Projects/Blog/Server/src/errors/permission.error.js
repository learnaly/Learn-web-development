const APIError = require('./api.error');

class PermissionError extends APIError {

  constructor(
    message = 'Unauthorized'
  ) {
    super(message);
    this.name = 'PermissionError';
  }

}

module.exports = PermissionError;
