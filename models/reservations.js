'use strict';
module.exports = function(sequelize, DataTypes) {
  var reservations = sequelize.define('reservations', {
    car_id: DataTypes.INT,
    space_id: DataTypes.INT,
    start: DataTypes.DATETIME,
    end: DataTypes.DATETIME,
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