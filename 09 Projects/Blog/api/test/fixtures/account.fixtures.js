const { hashPassword } = require('../../src/utils');

exports.insertAccounts = async DB => {
  try {
    const collection = DB.collection('accounts');

    const results = await collection.insertMany([
      {
        id: '1',
        data: {
          full_name: 'A1',
          email: 'a1@gmail.com',
          security: {
            password: await hashPassword('Newpassword1'),
          },
        },
        api_meta: {
          received_at: 1579967100,
        },
      },
      {
        id: '2',
        data: {
          full_name: 'A2',
          email: 'a2@gmail.com',
          security: {
            password: await hashPassword('Newpassword1'),
          },
        },
        api_meta: {
          received_at: 1579967200,
        },
      },
    ]);

    return results.ops;
  } catch (error) {
    throw error;
  }
};
