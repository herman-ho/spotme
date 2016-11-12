'use strict';
module.exports = function(sequelize, DataTypes) {
  var reservations = sequelize.define('reservations', {
    car_id: DataTypes.INTEGER,
    space_id: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    pricePerHalfHour: DataTypes.NUMERIC,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reservations;
};