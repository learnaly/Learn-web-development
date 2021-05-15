const { ObjectId } = require('mongodb');
const { v4: uuid } = require('uuid');

const { getTimestamp } = require('../../utils/date.util');

class Account {
  _id;
  id;
  meta = {};
  data;
  api_meta = {};

  constructor(body = {}) {
    // Required Mongo Object ID
    this._id = new ObjectId();
    // Custom ID we will use
    this.id = uuid();

    this.data = body.data;

    this.api_meta.received_at = getTimestamp();
  }

}

module.exports = Account;
