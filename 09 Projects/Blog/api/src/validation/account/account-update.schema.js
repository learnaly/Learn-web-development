const AccountSecurity = {
  type: 'object',
  properties: {
    password: { type: 'string' },
  },
  additionalProperties: false,
  required: ['password'],
};

const accountUpdateSchema = {
  $async: true,
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        full_name: { type: 'string' },
        security: AccountSecurity,
      },
      additionalProperties: false
    },
  },
  additionalProperties: false
};

module.exports = accountUpdateSchema;
