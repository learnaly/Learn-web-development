const { AuthenticationError } = require('../errors');

module.exports = async (req, res, next) => {
  try {
    if (!req.account) throw new AuthenticationError();

    return next();
  } catch (error) {
    return next(error);
  }
};
