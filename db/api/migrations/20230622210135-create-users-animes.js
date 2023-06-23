'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users_animes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      episodes_watched: {
        type: Sequelize.INTEGER
      },
      is_finished: {
        type: Sequelize.BOOLEAN
      },
      id_users: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      },
      id_animes: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Animes', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users_animes');
  }
};