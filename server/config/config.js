if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  "development": {
    "username": process.env.USERNAME_DEV,
    "password": process.env.PASSWORD_DEV,
    "database": process.env.DB_DEV,
    "host": process.env.HOST_DEV,
    "dialect": process.env.DIALECT_DEV
  },
  "test": {
    "username": process.env.USERNAME_TEST,
    "password": process.env.PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": process.env.HOST_TEST,
    "dialect": process.env.DIALECT_DEV
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
          "rejectUnauthorized": false
      }
    }
  }
}
