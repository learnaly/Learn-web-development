const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
// These are express plugins
// just add them for now, don't think about it too much
// if you wanna, research each one to see what it does
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const morgan = require('morgan');

const Config = require('./config');

const app = express();

const PORT = 5000;

const run = async () => {
  const mongo = {
    db: '',
    client: '',
  };

  const connectToMongo = () => new Promise((resolve, reject) => {
    MongoClient.connect(
      Config.db.mongo.uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error, client) => {
        if (error) throw new Error(error.message);
        console.log('Mongo has connected');

        // Client is like our currently running connection to mongo from our server
        mongo.client = client;
        // DB is actually access to our blog db
        mongo.db = client.db('blog');

        return resolve();
      });
  });

  await connectToMongo();

  // Express app plugins and settings
  app.set('trust proxy', true);
  app.set('json spaces', 2);

  // This one means front-end apps can send JSON in request body
  // and our app will be able to parse it and use it
  app.use(express.json({ limit: 105 * 1024 * 1024 })); // 105 mb limit of JSON size that request can send
  // Other fancy plugins
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(compression());
  app.use(methodOverride());
  app.use(cors({ origin: '*' }));

  // Health endpoint, always returning Ok or similar.
  // This is used for monitoring services to just ping the running server
  // to check if it didn't crash and it's still up and running
  app.get('/', (req, res) => {
    const data = {
      response: 'Ok',
    };

    // We are returning now JSON response now to the front-end
    return res.status(200).json(data);
  });

  // With router instead of creating a lot of routes with app.get, app.post for each route
  // You can group them in a router, and at the end just register that router for specific route in the app
  const routes_posts = express.Router();

  // Get /posts - Returns all posts
  routes_posts.get('/', async (req, res) => {
    const collection = mongo.db.collection('posts');

    // Returns all posts
    const posts = await collection.find().toArray();

    const data = {
      response: posts,
    };

    return res.status(200).json(data);
  });

  // POST /posts - Create a post
  routes_posts.post('/', async (req, res) => {
    const collection = mongo.db.collection('posts');

    const body = req.body;

    const data = {
      ...body,
      _id: ObjectID(),
    };

    await collection.insertOne(data);

    return res.status(200).json({ response: 'Created' });
  });

  app.use('/posts', routes_posts);

  // Buy calling listen method, and passing a PORT, you are initiating your API server to run and listen for incoming requests
  app.listen(PORT, () => {
    console.log(`API server app, running on http://localhost:${PORT}...`);
  });
};

run();