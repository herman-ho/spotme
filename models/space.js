module.exports = function(sequelize, DataTypes) {
  var Space = sequelize.define('space', {
    userId: DataTypes.INTEGER,
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address2: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      valdate: {
        notEmpty: true,
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: {
          args: 2,
          msg: "Please enter the two letters for the state",
        },
      },
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
        len: {
          arg: [5, 10],
          msg: "please enter the 5 to 10 digits Zip code",
        },
      },
    },
    coordinatePoint: {
      type: DataTypes.GEOGRAPHY('POINT',4326),
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    pricePerHalfHour: {
      type: DataTypes.DECIMAL(9,2),
    },
    active: {
      type: DataTypes.BOOLEAN
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.space.belongsTo(models.user);
      }
    }
  });

  return Space;
};
