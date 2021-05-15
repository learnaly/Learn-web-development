const express = require('express');
const slugify = require('slugify');

const APIResponse = require('../models/response/api-res.model');
const Post = require('../models/post/post.model');
const { validate, authenticate } = require('../middleware');
const Mongo = require('../database/mongo');
const { postCreateSchema, postUpdateSchema } = require('../validation/post');
const { ValidationError, PermissionError } = require('../errors');

const routes = express.Router();

// Create
routes.post(
  '/',
  authenticate,
  validate(postCreateSchema),
  async (req, res, next) => {
    try {
      if (!req.body.meta) req.body.meta = {};

      req.body.meta.created_by = req.account.id;

      const posts = new Post(req.body);

      let created = await Mongo.collection('posts').insertOne(posts);

      created = created.ops[0];

      return res.status(200).json(APIResponse.fromObjectCreated(created));
    } catch (error) {
      next(error);
    }
  }
);

// Get many public
routes.get(
  '/public',
  async (req, res, next) => {
    try {
      const posts = await Mongo.collection('posts').find().sort({ 'api_meta.received_at': -1 }).toArray();

      return res.status(200).json(APIResponse.fromSingleResult(posts));
    } catch (error) {
      next(error);
    }
  }
);

// Get one public
routes.get(
  '/public/:id',
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const post = await Mongo.collection('posts').findOne({ id });

      if (!post) throw new ValidationError('No post');

      return res.status(200).json(APIResponse.fromSingleResult(post));
    } catch (error) {
      next(error);
    }
  }
);

// Get many
routes.get(
  '/',
  authenticate,
  async (req, res, next) => {
    try {
      const posts = await Mongo.collection('posts').find({ 'meta.created_by': req.account.id }).sort({ 'api_meta.received_at': -1 }).toArray();

      return res.status(200).json(APIResponse.fromSingleResult(posts));
    } catch (error) {
      next(error);
    }
  }
);

// Get
routes.get(
  '/:id',
  authenticate,
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const post = await Mongo.collection('posts').findOne({ id });

      if (!post) throw new ValidationError('No post');

      // Only post's author can update it
      if (post.meta.created_by !== req.account.id) throw new PermissionError();

      return res.status(200).json(APIResponse.fromSingleResult(post));
    } catch (error) {
      next(error);
    }
  }
);

// Update
routes.put(
  '/:id',
  authenticate,
  validate(postUpdateSchema),
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const post = await Mongo.collection('posts').findOne({ id });

      if (!post) throw new ValidationError('No post');

      // Only post's author can update it
      if (post.meta.created_by !== req.account.id) throw new PermissionError();

      const data = {};
      let updated;

      Object.keys(req.body.data).forEach(key => {
        data[`data.${key}`] = req.body.data[key];
      });

      if (data['data.title']) data['data.url'] = slugify(data['data.title'], { lower: true });

      if (!!Object.keys(data).length) {
        updated = await Mongo.collection('posts').findOneAndUpdate(
          { id },
          { $set: data },
          { returnOriginal: false }
        );

        updated = updated.value;
      }

      return res.status(200).json(APIResponse.fromSingleResult(updated));
    } catch (error) {
      next(error);
    }
  }
);

// Delete
routes.delete(
  '/:id',
  authenticate,
  async (req, res, next) => {
    try {
      const id = req.params.id;

      const post = await Mongo.collection('posts').findOne({ id });

      if (!post) throw new ValidationError('No post');

      // Only post's author can update it
      if (post.meta.created_by !== req.account.id) throw new PermissionError();

      await Mongo.collection('posts').findOneAndDelete(
        { id }
      );

      return res.status(200).json(APIResponse.fromSingleResult('Removed'));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = routes;
