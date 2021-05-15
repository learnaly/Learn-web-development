const { insertAccounts } = require('./account.fixtures');
const { insertPosts } = require('./post.fixtures');

exports.insertAll = async DB => {
  return {
    accounts: await insertAccounts(DB),
    posts: await insertPosts(DB),
  };
};
