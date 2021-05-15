const tags = {
  type: 'array',
  items: {
    type: 'string',
  },
  additionalItems: false,
};

const postCreateSchema = {
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
      required: ['title', 'body'],
    },
  },
  additionalProperties: false,
  required: ['data'],
};

module.exports = postCreateSchema;
