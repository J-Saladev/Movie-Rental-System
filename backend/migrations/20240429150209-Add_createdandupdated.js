/* A migration to add the created_at and updated_at columns to the tables. */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* Movies */
   await queryInterface.addColumn('movies', 'createdAt', {
    type: Sequelize.DATE

   })
   await queryInterface.addColumn('movies', 'updatedAt', {
    type: Sequelize.DATE
   })
   /* Rentals */
   await queryInterface.addColumn('rentals', 'createdAt', {
    type: Sequelize.DATE
   })
   await queryInterface.addColumn('rentals', 'updatedAt', {
    type: Sequelize.DATE
   })
   /* Users */
   await queryInterface.addColumn('users', 'createdAt', {
    type: Sequelize.DATE
   })
   await queryInterface.addColumn('users', 'updatedAt', {
    type: Sequelize.DATE
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('movies', 'createdAt')
    await queryInterface.removeColumn('movies', 'updatedAt')
    await queryInterface.removeColumn('rentals', 'createdAt')
    await queryInterface.removeColumn('rentals', 'updatedAt')
    await queryInterface.removeColumn('users', 'createdAt')
    await queryInterface.removeColumn('users', 'updatedAt')
  }
};
