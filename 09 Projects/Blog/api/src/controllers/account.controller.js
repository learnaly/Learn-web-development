const express = require('express');

const APIResponse = require('../models/response/api-res.model');
const { accountCreateSchema } = require('../validation/account');
const Account = require('../models/account/account.model');
const { validate, authenticate } = require('../middleware');
const { hashPassword } = require('../utils');
const Mongo = require('../database/mongo');
const { ValidationError } = require('../errors');

const routes = express.Router();

// Create (register)
routes.post(
  '/',
  validate(accountCreateSchema),
  async (req, res) => {
    // Never store raw password in the database as it can leak, get hacked
    // Always hash it, hash is a process of creating an irreversable unique string out of given input
    // On login to check if user password is correct we just hash the user password provided and compare with this initially hashed password
    req.body.data.security.password = await hashPassword(req.body.data.security.password);

    const account = new Account(req.body);

    let created = await Mongo.collection('accounts').insertOne(account);

    created = created.ops[0];

    // No need to return password in the response
    delete created.data.security;

    return res.status(200).json(APIResponse.fromObjectCreated(created));
  }
);

// Get account
routes.get(
  '/me',
  authenticate,
  async (req, res) => {
    let account = await Mongo.collection('accounts').aggregate([
      {
        $match: {
          id: req.account.id,
        },
      },
      {
        $project: {
          _id: 0,
          id: 1,
          data: {
            full_name: '$$ROOT.data.full_name',
            email: '$$ROOT.data.email',
          },
          api_meta: '$$ROOT.api_meta',
        },
      }
    ]).toArray();

    account = account[0];

    if (!account) throw new ValidationError('No account');

    return res.status(200).json(APIResponse.fromSingleResult(account));
  }
);

module.exports = routes;
