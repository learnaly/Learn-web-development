const tags = {
  type: 'array',
  items: {
    type: 'string',
  },
  additionalItems: false,
};

const postUpdateSchema = {
  $async: true,
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        body: { type: 'string' },
        tags,
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false,
  required: ['data']
};

module.exports = postUpdateSchema;
