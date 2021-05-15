const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const APIResponse = require('../models/response/api-res.model');
const Mongo = require('../database/mongo');
const { ValidationError, AuthenticationError } = require('../errors');
const Config = require('../config');

const routes = express.Router();

// Login
routes.post(
  '/login',
  async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!(email && password)) throw new ValidationError('Email and password are required');

      const account = await Mongo.collection('accounts').findOne({ 'data.email': email });

      if (!account) throw new ValidationError('No account')

      const isValidPassword = await bcrypt.compare(password, account.data.security.password);

      if (!isValidPassword) throw new AuthenticationError('Password is incorrect')

      const token = jwt.sign({
        data: {
          id: account.id,
          data: {
            full_name: account.data.full_name,
            email: account.data.email,
          },
        },
      }, Config.config.secret, { expiresIn: '1d' });

      return res.status(200).json(APIResponse.fromSingleResult(token));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = routes;
