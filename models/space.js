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
    address2: DataTypes.STRING,
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
    coordinates: DataTypes.GEOMETRY,
    instructions: DataTypes.STRING,
    pricePerHalfHour: DataTypes.DECIMAL(11,4),
    active: DataTypes.BOOLEAN
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
