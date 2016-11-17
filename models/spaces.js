'use strict';
module.exports = function(sequelize, DataTypes) {
  var spaces = sequelize.define('spaces', {
    owner: DataTypes.INTEGER,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    coordinates: DataTypes.GEOMETRY,
    instructions: DataTypes.STRING,
    pricePerHalfHour: DataTypes.NUMERIC,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return spaces;
};