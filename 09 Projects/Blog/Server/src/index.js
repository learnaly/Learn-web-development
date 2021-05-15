const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const morgan = require('morgan');

const rootRoutes = require('./controllers/root.controller');
const accountRoutes = require('./controllers/account.controller');
const authRoutes = require('./controllers/auth.controller');
const postRoutes = require('./controllers/post.controller');
const { error, auth } = require('./middleware');
const Mongo = require('./database/mongo');
const Config = require('./config');

const app = express();

const test = Config.config.nodeEnv === 'test';

const run = async () => {

  // Connect to required services for our API to work
  // If any fails to connect, throw error (in their connect methods)
  // so our server fails to start, as our server wouldn't work properly without having
  // successful connections to those services, in this case our mongo db
  if (!test) {
    await Mongo.connect();
  }

  app.set('trust proxy', true);
  app.set('json spaces', 2);
  app.use(express.json({ limig: 105 * 1024 * 1024 }));
  app.use(helmet());
  app.use(compression());
  app.use(methodOverride());
  app.use(cors({ origin: '*' }));

  if (!test) {
    app.use(morgan('combined'));
  }

  // Global route middlewares
  app.use(auth);

  // Routes
  app.use('/', rootRoutes);
  app.use('/accounts', accountRoutes);
  app.use('/auth', authRoutes);
  app.use('/posts', postRoutes);

  // Error Handler
  // All errors thrown in any endpoint (route) registerd above,
  // will all bubble up, to this handler function.
  // It's useful, so in one centralized method we can add logic
  // how to handle all API endpoint errors, and return a consistent respose
  app.use(error);

  // Server errors
  process.on('unhandledRejection', error => console.warn('!! Unhandled Rejection !!', error));
  process.on('uncaughtException', error => console.warn('!! Uncaught Exception !!', error));

  app.on('error', error => {
    switch (error.code) {
      case 'EACCES':
        console.error(`${Config.config.port} requires elevated privileges`);
        break;

      case 'EADDRINUSE':
        console.error(`${Config.config.port} is already in use`);
        break;

      default:
        throw error;
    }

    process.exit(1);
  });

  const httpServer = http.createServer(app);

  // Listen
  exports.server = httpServer.listen(Config.config.port, () => console.log(`Listening on port ${Config.config.port}`));
};

run();
