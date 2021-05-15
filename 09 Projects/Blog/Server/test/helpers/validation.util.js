const Ajv = require('ajv');

const {
  accountEmailExists
} = require('../../src/validation/validators');

exports.ajv = new Ajv({ allErrors: true });

ajv.addKeyword({
  keyword: 'accountEmailExists',
  async: true,
  type: 'string',
  validate: accountEmailExists,
});

