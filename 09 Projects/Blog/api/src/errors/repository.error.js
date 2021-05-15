const APIError = require('./api.error');

class RepositoryError extends APIError {

  constructor(
    message = ''
  ) {
    super(message);
    this.name = 'RepositoryError';
  }

}

module.exports = RepositoryError;
