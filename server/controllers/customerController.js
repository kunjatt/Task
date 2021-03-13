const { Customer } = require('../models')

class CustomerController {
  static showCustomer(req, res ,next) {
    Customer.findAll({
      order: [
        ['updatedAt', 'ASC']
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    })
    .then(data => {
      // console.log(data, '>>>>>>> data cust');
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = CustomerController