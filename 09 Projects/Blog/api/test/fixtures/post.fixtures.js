exports.insertPosts = async DB => {
  try {
    const collection = DB.collection('posts');

    const results = await collection.insertMany([
      {
        id: '1',
        meta: {
          created_by: '1',
        },
        data: {
          title: 'Post 1',
          body: 'Some text',
          tags: ['a', 'b', 'c'],
        },
        api_meta: {
          received_at: 1579967100,
        },
      },
      {
        id: '2',
        meta: {
          created_by: '2',
        },
        data: {
          title: 'Post 2',
          body: 'Some text',
          tags: ['b', 'c', 'd'],
        },
        api_meta: {
          received_at: 1579967200,
        },
      },
    ]);

    return results.ops;
  } catch (error) {
    throw error;
  }
};
