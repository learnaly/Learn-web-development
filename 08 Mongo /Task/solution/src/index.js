const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

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
        if (error) throw new ConnectionError(error.message);
        console.log('Mongo has connected');

        // Client is like our currently running connection to mongo from our server
        mongo.client = client;
        // DB is actually access to our blog db
        mongo.db = client.db('blog');

        return resolve();
      });
  });

  await connectToMongo();

  app.set('trust proxy', true);
  app.set('json spaces', 2);

  app.use(express.json({ limig: 105 * 1024 * 1024 }));
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(compression());
  app.use(methodOverride());
  app.use(cors({ origin: '*' }));

  app.get('/', (req, res) => {
    const data = {
      response: 'Ok',
    };

    return res.status(200).json(data);
  });

  const routes_contacts = express.Router();

  // Get /contacts - Returns all contacts
  routes_contacts.get('/', async (req, res) => {
    const collection = mongo.db.collection('contacts');

    // Returns all contacts
    const contacts = await collection.find().toArray();

    const data = {
      response: contacts,
    };

    return res.status(200).json(data);
  });

  // POST /contacts - Create a contact
  routes_contacts.post('/', async (req, res) => {
    const collection = mongo.db.collection('contacts');

    const body = req.body;

    const data = {
      ...body,
      _id: ObjectID(),
    };

    await collection.insertOne(data);

    return res.status(200).json({ response: 'Created' });
  });

  app.use('/contacts', routes_contacts);

  // Buy calling listen method, and passing a PORT, you are initiating your API server to run and listen for incoming requests
  app.listen(PORT, () => {
    console.log(`API server app, running on http://localhost:${PORT}...`);
  });
};

run();