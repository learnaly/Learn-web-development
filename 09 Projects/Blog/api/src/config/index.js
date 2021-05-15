const path = require('path');
const dotenv = require('dotenv');

// This loads all envrionment variables that we set in a .env.dev file.
// This file should never be uploaded to github or anywhere so you don't leak your db url, etc.
const envPath = path.resolve(`./${process.env.NODE_ENV === 'test' ? '.env.test' : '.env.dev'}`);

dotenv.config({
  path: envPath,
});

// More useful if we store config in a class
// and return config object with a getter class method, since depending on some potential changes
// it returns a more dynamic and less hard coded value for the config
class Config {
  default = {
    port: 5000,
    nodeEnv: 'development',
    secret: '123',
    db: {
      mongo: {
        uri: '',
        name: 'blog',
      },
    },
  };

  get config() {
    return {
      port: process.env.PORT || this.default.port,
      nodeEnv: process.env.NODE_ENV || this.default.nodeEnv,
      secret: process.env.SECRET || this.default.secret,
      db: {
        mongo: {
          uri: process.env.DB_MONGO_URI || this.default.db.mongo.uri,
          name: process.env.DB_MONGO_DB_NAME || this.default.db.mongo.name,
        },
      },
    };
  }

}

module.exports = new Config();
