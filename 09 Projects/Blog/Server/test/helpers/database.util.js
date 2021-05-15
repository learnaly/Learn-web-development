const jwt = require('jsonwebtoken');

const Mongo = require('../../src/database/mongo');
const Config = require('../../src/config');

const dropDatabase = async DB => {
  if (DB && DB.databaseName === 'blog-test') {
    await DB.dropDatabase();
  }
}

exports.clean = async DB => {
  await dropDatabase(DB);
};

exports.getDatabaseConnection = async () => {
  try {
    const DB = await Mongo.getConnection();

    return DB;
  } catch (error) {
    throw error;
  }
};

exports.generateTokens = async (
  fixtures = {},
  justToken = false
) => {
  const tokens = {};
  const { accounts } = fixtures;

  for (const account of accounts) {
    const data = {
      id: account.id,
      data: {
        full_name: account.data.full_name,
        email: account.data.email,
      },
    };

    const token = await jwt.sign({
      data,
    }, Config.config.secret, { expiresIn: '1h' });

    const label = account.id;

    tokens[label] = justToken ? token : `API_TOKEN ${token}`;
  }

  return tokens;
};

exports.dropDatabase = dropDatabase;
