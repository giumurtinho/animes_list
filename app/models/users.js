'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Users_animes, {
      foreignKey: 'id_users'
    })
  }
  return Users;
};