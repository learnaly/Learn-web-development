const { ObjectId } = require('mongodb');
const slugify = require('slugify');
const { v4: uuid } = require('uuid');

const { getTimestamp } = require('../../utils/date.util');

class Post {
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

    this.meta = body.meta;
    this.data = body.data;

    this.data.url = slugify(this.data.title, { lower: true });

    this.api_meta.received_at = getTimestamp();
  }

}

module.exports = Post;
