const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models')

describe('Login test', () => {
    afterAll(done => {
      sequelize.close()
      done()
    })
  
    it('Success ==> return 200 status code', (done) => {
      const body = {
        email: 'amandaputrimaudy@gmail.com',
        password: '#Pa55w0rd#'
      }
      request(app)
        .post('/login')
        .send(body)
        .end((err, res) => {
          if(err) done(err)
          expect(res.statusCode).toEqual(200)
          expect(typeof res.body).toEqual('object')
          done()
        })
    })

    it('Failed ==> Email not registered, return 401 status code', (done) => {
        const body = {
          email: 'fake email',
          password: '#Pa55w0rd#'
        }
        request(app)
          .post('/login')
          .send(body)
          .end((err, res) => {
            if(err) done(err)
            expect(res.statusCode).toEqual(401)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('message')
            expect(typeof res.body.message).toEqual('string')
            done()
          })
    })

    it('Failed ==> Insert wrong password, return 401 status code', (done) => {
      const body = {
        email: 'amandaputrimaudy@gmail.com',
        password: 'ada_amin'
      }
      request(app)
        .post('/login')
        .send(body)
        .end((err, res) => {
          if(err) done(err)
          expect(res.statusCode).toEqual(401)
          expect(typeof res.body).toEqual('object')
          expect(res.body).toHaveProperty('message')
          expect(typeof res.body.message).toEqual('string')
          done()
        })
    })
})