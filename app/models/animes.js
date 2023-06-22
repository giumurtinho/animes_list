'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Animes = sequelize.define('Animes', {
    name: DataTypes.STRING,
    episodios: DataTypes.NUMBER
  }, {});
  Animes.associate = function(models){
    Animes.hasMany(models.Users_animes, {
      foreignKey: 'id_animes'
    })
  }
  return Animes;
};