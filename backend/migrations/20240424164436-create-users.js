/* A migration to create the users table. */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    telephone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    zipcode: {
        type: Sequelize.STRING
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};