const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Parkings = sequelize.define('parkings', {
        streetAddress: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
            valdate: {
                notEmpty: true,
            },
        },
        state: {
            type: Sequelize.STRING,
            allowNull:false,
            validate: {
                notEmpty: true,
                len: {
                    args: 2,
                    msg: "Please enter the two letters for the state",
                },
            },
            zipCode: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isAlphanumeric: false,
                    len: {
                        arg: [5, 5],
                        msg: "please enter the 5-digits Zip code",
                    },
                },
            },
        }
    });

    return Parkings;
};