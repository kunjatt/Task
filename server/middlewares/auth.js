const { User } = require('../models')
const {checkToken} = require('../helpers/jwt')

function authenticate(req, res, next) {
  try {
    let decoded = checkToken(req.headers.access_token)
    User.findOne({
      where: {
        email: decoded.email
      }
    })
    .then(data => {
      if(data){
        req.user = {
          id: data.id,
          email: data.email
        }
        next()
      } else {
        next({
          status: 401
        })
      }
    })
    .catch(err => next(err))
  } catch(error) {
    next({
      status: 400,
      errors: [error]
    })
  }
}

module.exports = authenticate