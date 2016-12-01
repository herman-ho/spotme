'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('car', {
    userId: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.STRING,
    license: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.car.belongsTo(models.user);
      }
    }
  });
  return Car;
};