module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('reservation', {
    carId: DataTypes.INTEGER,
    spaceId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    pricePerHalfHour: DataTypes.NUMERIC
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.reservation.belongsTo(models.car);
        models.reservation.belongsTo(models.space);
      }
    }
  });
  return Reservation;
};