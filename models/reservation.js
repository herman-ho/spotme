module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define('reservation', {
    driverId: {
      type: DataTypes.INTEGER,
    },
    carId: {
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
    },
    spaceId: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    startTime: {
      type: DataTypes.TIME,
    },
    endTime: {
      type: DataTypes.TIME,
    },
    pricePerHalfHour: {
      type: DataTypes.DECIMAL(9,2),
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reservation;
};
