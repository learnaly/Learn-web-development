const APIError = require('./api.error');

class ExistsError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'ExistsError';
  }

}

module.exports = ExistsError;
