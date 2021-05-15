const chai = require('chai');
const chaiHttp = require('chai-http');

const { getDatabaseConnection, clean, generateTokens } = require('../helpers/database.util');
const { server } = require('../../src');
const { insertAll } = require('../fixtures');

chai.use(chaiHttp);
chai.should();

const { expect } = chai;

describe('(CONTROLLER) Accounts /accounts', () => {
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

  describe('(POST) /accounts', () => {

    it('Validation error', async () => {
      const res = await chai.request(server)
        .post(`/accounts`)
        .send({
          data: {
            full_name: 'John Doe',
          },
        });

      res.should.have.status(400);

      expect(res.body.meta.message).eq('Data email is required; Data security is required.');
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .post(`/accounts`)
        .send({
          data: {
            full_name: 'John Doe',
            email: 'john@doe.com',
            security: {
              password: 'Newpassword1',
            },
          },
        });

      res.should.have.status(200);

      expect(typeof res.body.response.id).eq('string');
    });

  });

  describe('(GET) /accounts/me', () => {

    it('Unauthorized', async () => {
      const res = await chai.request(server)
        .get(`/accounts/me`);

      res.should.have.status(401);
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .get(`/accounts/me`)
        .set('Authorization', tokens['1']);

      res.should.have.status(200);

      expect(res.body.response.id).eq('1');
      expect(res.body.response.data.full_name).eq('A1');
    });

  });

  after(async () => {
    await clean(DB);
  });

});
