const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve('.env.dev');

// This loads all envrionment variables that we set in a .env.dev file.
// This file should never be uploaded to github or anywhere so you don't leak your db url, etc.
dotenv.config({
  path: envPath,
});

const config = {
  db: {
    mongo: {
      uri: process.env.DB_MONGO_URI,
    },
  },
};

module.exports = config;