'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Users_animes = sequelize.define('Users_animes', {
    episodes_watched: DataTypes.NUMBER,
    is_finished: DataTypes.BOOLEAN
  }, {})
  Users_animes.associate = function(models) {
    Users_animes.belongsTo(models.Users, {
      foreignKey: 'id_users'
    });
    Users_animes.belongsTo(models.Animes, {
      foreignKey: 'id_animes'
    })
  }
  return Users_animes;
};