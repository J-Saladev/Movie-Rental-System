/*A "seeder" to seed the users table. (Holds demo data)*/
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      address: '123 Main St',
      telephone: '123-456-7890',
      email: 'XJ4X7@example.com',
      zipcode: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      name: 'Jane Doe',
      address: '456 Main St',
      telephone: '123-456-7890',
      email: 'XJ4X7@example.com',
      zipcode: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
