
/* A migration to create the movies table. */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    director: {
        type: Sequelize.STRING
    },
    actors: {
        type: Sequelize.STRING
    },
    genres: {
        type: Sequelize.STRING
    },
    premiere: {
        type: Sequelize.DATE
    },
    availability: {
        type: Sequelize.BOOLEAN
    }
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};
