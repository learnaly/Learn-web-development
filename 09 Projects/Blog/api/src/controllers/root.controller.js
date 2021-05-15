const express = require('express');

const APIResponse = require('../models/response/api-res.model');

const routes = express.Router();

// Health endpoint
routes.get(
  '/',
  (req, res) => res.status(200).json(APIResponse.fromSingleResult('Ok'))
);

// Health endpoint
routes.get(
  '/health',
  (req, res) => res.status(200).json(APIResponse.fromSingleResult('Ok'))
);

module.exports = routes;
