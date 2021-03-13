const jwt = require('jsonwebtoken')

function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET)
}

function checkToken(payload) {
  return jwt.verify(payload, process.env.JWT_SECRET)
}

module.exports = {
  generateToken,
  checkToken
}