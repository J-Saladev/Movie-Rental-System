/* Adding references to the user and movie table on the rentals table.*/
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('rentals', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
    }});
   await queryInterface.addColumn('rentals', 'movie_id', {
    type: Sequelize.INTEGER,
    references: {
        model: 'movies',
        key: 'id'
    }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('rentals', 'user_id')
    await queryInterface.removeColumn('rentals', 'movie_id')
  }
};
