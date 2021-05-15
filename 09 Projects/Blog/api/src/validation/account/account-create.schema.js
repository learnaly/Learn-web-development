const { email } = require('../');

const AccountSecurity = {
  type: 'object',
  properties: {
    password: { type: 'string' },
  },
  additionalProperties: false,
  required: ['password'],
};

const accountCreateSchema = {
  $async: true,
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        full_name: { type: 'string' },
        email,
        security: AccountSecurity,
      },
      additionalProperties: false,
      required: ['email', 'security'],
    },
  },
  additionalProperties: false,
  required: ['data'],
};

module.exports = accountCreateSchema;
