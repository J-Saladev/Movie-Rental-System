'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rentals', [{
      user_id: 1,
      movie_id: 1,
      rentaldate: '2021-01-01',
      returndate: '2021-01-02',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
      
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rentals', null, {})
  }
};
