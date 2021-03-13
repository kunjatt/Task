const router = require('express').Router()
const UserController = require('../controllers/userController')
const CustomerController = require('../controllers/customerController')
const authenticate  = require('../middlewares/auth')

router.post('/login', UserController.login)
router.use(authenticate)
router.get('/customers', CustomerController.showCustomer)

module.exports = router