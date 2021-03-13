const request = require('supertest')
const app = require('../app')
const { sequelize, User, Customer } = require('../models')
const { generateToken } = require('../helpers/jwt')

const admin = {
  email: 'amandaputrimaudy@gmail.com',
  password: '#Pa55w0rd#'
}

let id;
let access_token;

describe('Read all customer', () => {
  afterAll(done => {
    sequelize.close()
    done()
  })

  beforeAll(done => {
    access_token = generateToken(admin)
    Customer.findAll()
    .then(_ => {
      done()
    })
    // User.findOne({
    //   where: {
    //     email: admin.email
    //   }
    // })
    // .then(data => {
    //   id = data.id
    //   // done()
    //   return Customer.findAll()
    // })
    // .then(data => {
    //   done()
    // })
  })

  it('Success read all customer', (done) => {
    
    request(app)
      .get('/products')
      .set('access_token', access_token)
      .end((err, res) => {
        if(err) done(err)
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body))
        done()
      })
  })
})