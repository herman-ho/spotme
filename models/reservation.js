module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('reservation', {
    driverId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    spaceId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    pricePerHalfHour: DataTypes.DECIMAL(9,2)
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
