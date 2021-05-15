const Mongo = require('../database/mongo');

exports.accountEmailExists = (schema, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const EMAIL = typeof data === 'object' ? data.email : data;

      const object = await Mongo.collection('accounts').findOne({ 'data.email': EMAIL });

      if (object) throw new ValidationError('Account already exists with this email');

      resolve(true);
    } catch (error) {
      resolve(false);
    }
  });
};
