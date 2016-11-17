'use strict';
module.exports = function(sequelize, DataTypes) {
  var cars = sequelize.define('cars', {
    owner: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    license: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cars;
};