'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users_animes', [
      {
        id_users: 2,
        id_animes: 3,
        episodes_watched: 20,
        is_finished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_users: 1,
        id_animes: 1,
        episodes_watched: 10,
        is_finished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_users: 3,
        id_animes: 2,
        episodes_watched: 50,
        is_finished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_users: 4,
        id_animes: 4,
        episodes_watched: 15,
        is_finished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users_animes', null, {});
  }
};
