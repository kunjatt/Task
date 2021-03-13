const { User } = require('../models')
const { compare } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static login(req, res ,next) {
    let email = req.body.email
    let password = req.body.password
    User.findOne({
      where: {
        email
      }
    })
    .then(data => {
      if(data) {
        if(compare(password, data.password)) {
          let access_token = generateToken({
            id: data.id,
            email: data.email
          })
          let output = {
            access_token,
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          }
          res.status(200).json(output)
        } else {
          next({
            status: 401,
            message: `Invalid email / password`
          })
        }
      } else {
        next({
          status: 401,
          message: `You have to register first`
        })
      }
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = UserController