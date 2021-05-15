const { clean, getDatabaseConnection } = require('./database.util');

before(async () => {
  const DB = await getDatabaseConnection();

  await clean(DB);
});
