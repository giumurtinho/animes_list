'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
    {
      nome: 'Alice',
      email: 'alice@alice.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Barbara',
      email: 'barbara@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Gustavo',
      email: 'gustavo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: 'Felipe',
      email: 'felipe@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
