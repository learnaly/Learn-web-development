const jwt = require('jsonwebtoken');

const { AuthenticationError } = require('../errors');
const Config = require('../config');

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) return next();

    token = token.split('API_TOKEN ');
    token = token[1];

    const verify = await jwt.verify(token, Config.config.secret);

    if (verify.data) req.account = verify.data;

    return next();
  } catch (error) {
    return next(new AuthenticationError('Token is invalid'));
  }
};
