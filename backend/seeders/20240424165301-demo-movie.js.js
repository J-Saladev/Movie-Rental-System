'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [{
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
      genres: 'Drama',
      premiere: '1994-10-14',
      availability: true,
      createdAt: new Date(),
      updatedAt: new Date()
      
    },
    {
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      actors: 'Marlon Brando, Al Pacino, James Caan, Richard S. Castellano',
      genres: 'Drama',
      premiere: '1972-03-24',
      availability: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {})
  }
};
