/*A "seeder" to seed the rentals table. (Holds demo data)
If this seeder fails to be called it may be because the user and movie table do not contain a user_id and movie_id of 1. 
In that case just add an id for both that matches an id in the user and movie table.
*/

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
