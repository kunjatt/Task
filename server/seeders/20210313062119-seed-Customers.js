'use strict';

const data = [
  {
    firstname: 'budi',
    lastname: 'dalton',
    email: 'bud@mail.com',
    item: 'barang1',
    quantity: 5,
    totalPrice: 2500000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'budi',
    lastname: 'doremi',
    email: 'doremi@mail.com',
    item: 'barang2',
    quantity: 3,
    totalPrice: 300000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'duta',
    lastname: 'pambudi',
    email: 'duta@yahoo.com',
    item: 'barang3',
    quantity: 3,
    totalPrice: 100000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'koba',
    lastname: 'ape',
    email: 'apekoba@gmail.com',
    item: 'barang4',
    quantity: 7,
    totalPrice: 70000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'dion',
    lastname: 'ikhsan',
    email: 'dion@mail.com',
    item: 'barang5',
    quantity: 10,
    totalPrice: 1000000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'loka',
    lastname: 'made',
    email: 'made@mail.com',
    item: 'barang6',
    quantity: 8,
    totalPrice: 400000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'alpi',
    lastname: 'yanto',
    email: 'alpi@mail.com',
    item: 'barang7',
    quantity: 4,
    totalPrice: 40000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'abdur',
    lastname: 'agi',
    email: 'agi@mail.com',
    item: 'barang8',
    quantity: 6,
    totalPrice: 120000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'yana',
    lastname: 'mulyana',
    email: 'yana@mail.com',
    item: 'barang9',
    quantity: 2,
    totalPrice: 200000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstname: 'aleika',
    lastname: 'zahra',
    email: 'ale@mail.com',
    item: 'barang10',
    quantity: 10,
    totalPrice: 10000000,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', data, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
