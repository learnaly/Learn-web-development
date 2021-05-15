const chai = require('chai');
const chaiHttp = require('chai-http');

const { getDatabaseConnection, clean, generateTokens } = require('../helpers/database.util');
const { server } = require('../../src');
const { insertAll } = require('../fixtures');

chai.use(chaiHttp);
chai.should();

const { expect } = chai;

describe('(CONTROLLER) Posts /posts', () => {
  let DB;
  let fixtures = {};
  let tokens;

  const setup = () => {
    return new Promise(async (resolve, reject) => {
      try {
        DB = await getDatabaseConnection();

        fixtures = await insertAll(DB);
        tokens = await generateTokens(fixtures);

      } catch (error) {
        console.log('Error: ', error);
      }

      resolve(true);
    });
  }

  before(async () => {
    await setup();
  });

  describe('(POST) /posts', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .post(`/posts`)
        .send({
          data: {
            title: 'Post title'
          },
        });

      res.should.have.status(401);
    });

    it('Validation error', async () => {
      const res = await chai.request(server)
        .post(`/posts`)
        .set('Authorization', tokens['1'])
        .send({
          data: {
            title: 'Post title'
          },
        });

      res.should.have.status(400);

      expect(res.body.meta.message).eq('Data body is required.');
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .post(`/posts`)
        .set('Authorization', tokens['1'])
        .send({
          data: {
            title: 'Post 1',
            body: 'Some text',
            tags: ['a', 'b', 'c', 'd']
          },
        });

      res.should.have.status(200);

      expect(typeof res.body.response.id).eq('string');
      expect(res.body.response.meta.created_by).eq('1');
      expect(res.body.response.data.title).eq('Post 1');
    });

  });

  describe('(GET) /posts/:id', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .get(`/posts/1`);

      res.should.have.status(401);
    });

    it(`Not user's post`, async () => {
      const res = await chai.request(server)
        .get(`/posts/2`)
        .set('Authorization', tokens['1']);

      res.should.have.status(403);
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .get(`/posts/1`)
        .set('Authorization', tokens['1']);

      res.should.have.status(200);

      expect(res.body.response.id).eq('1');
    });

  });

  describe('(PUT) /posts/:id', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .put(`/posts/1`);

      res.should.have.status(401);
    });

    it(`Not user's post`, async () => {
      const res = await chai.request(server)
        .put(`/posts/2`)
        .set('Authorization', tokens['1'])
        .send({
          data: {
            title: 'Post title updated',
          },
        });

      res.should.have.status(403);
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .put(`/posts/1`)
        .set('Authorization', tokens['1'])
        .send({
          data: {
            title: 'Post title updated',
          },
        });

      res.should.have.status(200);

      expect(res.body.response.id).eq('1');
      expect(res.body.response.data.title).eq('Post title updated');
    });

  });

  describe('(DELETE) /posts/:id', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .delete(`/posts/1`);

      res.should.have.status(401);
    });

    it(`Not user's post`, async () => {
      const res = await chai.request(server)
        .delete(`/posts/2`)
        .set('Authorization', tokens['1']);

      res.should.have.status(403);
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .delete(`/posts/1`)
        .set('Authorization', tokens['1']);

      res.should.have.status(200);

      expect(res.body.response).eq('Removed');
    });

  });

  describe('(GET) /posts', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .get(`/posts`);

      res.should.have.status(401);
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .get(`/posts`)
        .set('Authorization', tokens['1']);

      res.should.have.status(200);

      expect(res.body.response.length).eq(1);
    });

  });

  describe('(GET) /posts/public', () => {

    it('Success', async () => {
      const res = await chai.request(server)
        .get(`/posts/public`);

      res.should.have.status(200);

      expect(res.body.response.length).eq(2);
    });

  });

  describe('(GET) /posts/public/:id', () => {

    it('Success', async () => {
      const res = await chai.request(server)
        .get(`/posts/public/2`);

      res.should.have.status(200);

      expect(res.body.response.id).eq('2');
    });

  });

  after(async () => {
    await clean(DB);
  });

});
