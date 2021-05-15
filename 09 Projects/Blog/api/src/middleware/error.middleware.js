const { parseValidationErrors, capitalize } = require('../utils');

const DEFAULT_MESSAGE = 'Error occurred. Please try again later.';

const getAJVMessage = (error) => {
  let message = '';

  switch (error.keyword) {
    case 'isValidURL':
      message = 'is invalid URL';
      break;
    case 'format':
    case 'pattern':
    case 'oneOf':
      message = 'is invalid';
      break;
    case 'required':
      message = 'is required';
      break;
    case 'isObjectId':
      message = 'is invalid ObjectId';
      break;
    case 'accountExists':
    case 'postExists':
      message = `does not exist`;
      break;
    case 'accountEmailExists':
      message = `already exists`;
      break;
    case 'maxSize':
      message = 'Maximum data size limit exceeded';
      break;
    default:
      message = error.message;
  }

  return message;
};

const generateMessage = (error = {}) => {
  // AJV errors parsing
  if (error.errors) {
    const messages = [];

    const errors = parseValidationErrors(error);
    Object.keys(errors).forEach(key => messages.push(`${capitalize(key)} ${getAJVMessage(errors[key])}`));

    return `${messages.join('; ')}.`;
  }

  if (
    (error && error.error && error.error.name === 'MongoError') ||
    error.name === 'MongoError'
  ) return DEFAULT_MESSAGE;

  return error.message;
};

const errorHandler = (error, req, res, next) => {
  let status;
  let message = generateMessage(error);

  switch (error.name) {
    case 'SyntaxError':
    case 'TypeError':
    case 'ValidationError':
    case 'ExistsError':
    case 'CreateError':
    case 'NotFoundError':
      status = 400;
      break;
    case 'AuthenticationError':
      status = 401;
      break;
    case 'PermissionError':
      status = 403;
      break;
    case 'RepositoryError':
    case 'ConnectionError':
    case 'DeveloperError':
      status = 500;
      break;
    default:
      status = 500;
  }

  // AJV error
  if (error.message === 'validation failed') status = 400;

  // Stripe error
  if (error.raw) {
    status = error.raw.statusCode;
    message = error.raw.message;
  }

  // if 500 log as critical
  if (status >= 500) {
    console.error(error);
    message = DEFAULT_MESSAGE;
  }

  return res.status(status).json({ meta: { message, code: status } });
};

module.exports = errorHandler;
