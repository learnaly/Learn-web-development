const Ajv = require('ajv');

const { accountEmailExists } = require('../validation/validators');

// All params and query params in the URL of HTTP request, are in a string form,
// this function is just converting it to a javascript number, if it's a number,
// so our validation is more correct
const convertToNumber = (data) => { // eslint-disable-line
  return (!!Number(data) && data == String(Number(data))) ? Number(data) : null; // eslint-disable-line
};

const ajvValidate = async (schema, data) => {
  const ajv = new Ajv({ allErrors: true, strict: false });

  ajv.addKeyword({
    keyword: 'accountEmailExists',
    async: true,
    type: 'string',
    validate: accountEmailExists,
  });

  const test = ajv.compile(schema);

  try {
    await test(data);
  } catch (error) {
    throw error;
  }
};

const validate = (schema, options = {}) => {
  return async (req, res, next) => {
    let data = req.body;

    if (options.params) {
      Object.keys(req.params).map(prop => data[prop] = convertToNumber(req.params[prop]) || req.params[prop]);
      req.params = data;
    }

    if (options.queryParams) {
      Object.keys(req.query).map(prop => data[prop] = convertToNumber(req.query[prop]) || req.query[prop]);
      req.query = data;
    }

    if (options.paramsOnly) {
      data = {};
      Object.keys(req.params).map(prop => {
        const converted = convertToNumber(req.params[prop]);
        data[prop] = converted === undefined ? req.params[prop] : converted;
      });
      req.params = data;
    }

    if (options.queryParamsOnly) {
      data = {};
      Object.keys(req.query).map(prop => data[prop] = convertToNumber(req.query[prop]) || req.query[prop]);
      req.query = data;
    }

    try {
      await ajvValidate(schema, data);

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = validate;
