'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        nome: 'Kimetsu no Yaiba',
        episodios: 35,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Given',
        episodios: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Uma Vida Imortal',
        episodios: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: 'Boku no Hero',
        episodios: 144,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Animes', null, {});

  }
};
