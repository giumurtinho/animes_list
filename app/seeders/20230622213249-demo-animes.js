'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Animes', [
      {
        name: 'Kimetsu no Yaiba',
        episodios: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Given',
        episodios: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Uma Vida Imortal',
        episodios: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Boku no Hero',
        episodios: 144,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Animes', null, {});

  }
};
