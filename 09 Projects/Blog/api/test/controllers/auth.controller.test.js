const chai = require('chai');
const chaiHttp = require('chai-http');

const { getDatabaseConnection, clean, generateTokens } = require('../helpers/database.util');
const { server } = require('../../src');
const { insertAll } = require('../fixtures');

chai.use(chaiHttp);
chai.should();

const { expect } = chai;

describe('(CONTROLLER) Auth /auth', () => {
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

  describe('(POST) /auth/login', () => {

    it('No account', async () => {
      const res = await chai.request(server)
        .post(`/auth/login`)
        .send({
          email: 'asd',
          password: 'Newpassword1',
        });

      res.should.have.status(400);

      expect(res.body.meta.message).eq('No account');
    });

    it('Password is incorrect', async () => {
      const res = await chai.request(server)
        .post(`/auth/login`)
        .send({
          email: 'a1@gmail.com',
          password: 'Newpassword2',
        });

      res.should.have.status(401);

      expect(res.body.meta.message).eq('Password is incorrect');
    });

    it('Success', async () => {
      const res = await chai.request(server)
        .post(`/auth/login`)
        .send({
          email: 'a1@gmail.com',
          password: 'Newpassword1',
        });

      res.should.have.status(200);

      expect(typeof res.body.response).eq('string');
    });

  });

  after(async () => {
    await clean(DB);
  });

});
