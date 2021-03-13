const bcrypt = require('bcryptjs')

function hashPass(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function compare(password, hashed) {
  return bcrypt.compareSync(password, hashed)
}

module.exports = {
  hashPass,
  compare
}