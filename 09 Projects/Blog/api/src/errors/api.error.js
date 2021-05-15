
class APIError extends Error {

  constructor(
    message = ''
  ) {
    super(message);

    this.name = 'APIError';
    this.stack = (new Error(message)).stack;
  }

}

module.exports = APIError;
