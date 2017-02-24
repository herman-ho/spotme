module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('car', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    },
    license: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
