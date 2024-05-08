/* A migration to create the Rentals table. */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rentals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
   
    rentaldate: {
        type: Sequelize.DATE
    },
    returndate: {
        type: Sequelize.DATE
    },
    price: {
        type: Sequelize.DOUBLE
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rentals');
  }
};