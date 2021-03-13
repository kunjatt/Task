'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};