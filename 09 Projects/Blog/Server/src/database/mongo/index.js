const { MongoClient } = require('mongodb');

const { ConnectionError } = require('../../errors');
const Config = require('../../config');

class Mongo {
  connected;
  client;
  db;

  collection(collectionName) {
    return this.db.collection(collectionName);
  }

  getConnection() {
    return new Promise(async (resolve, reject) => {
      if (this.connected) return resolve(this.db);

      try {
        const db = await this.connect();

        return resolve(db);
      } catch (error) {
        throw new ConnectionError('Database failed to connect');
      }
    });
  }

  async closeConnection() {
    if (this.client && this.client.close) await this.client.close();
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        Config.config.db.mongo.uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (error, client) => {
          if (error) throw new ConnectionError(error.message);
          console.log('Mongo has connected');

          // Client is like our currently running connection to mongo from our server
          this.client = client;
          // DB is actually access to our blog db
          this.db = client.db(Config.config.db.mongo.name);
          this.connected = true;

          this.client.on('close', () => {
            console.warn('Database connection closed');
            this.connected = false;

            setTimeout(() => {
              if (!this.connected) throw new ConnectionError('Database reconnect failed');
            }, 10000);
          });

          return resolve(this.db);
        });
    });
  }

}

module.exports = new Mongo();
