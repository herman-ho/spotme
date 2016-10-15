const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize) => {
    const Cars = sequelize.define('cars', {
        makeName: {
            type: Sequelize.STRING,
            allowNull: false, //Prevents null values
            validate: {
                notEmpty: true, //Prevents empty strings
            },
        },
        modelName: {
            type: Sequelize.STRING,
            allowNull: false, //Prevents null values
            unique: true,
            validate: {
                notEmpty: true, //Prevents empty strings
            },
        },
        licensePlate: {
            type: Sequelize.STRING,
            allowNull: false, //Prevents null values
            primaryKey: true,
            validate: {
                notEmpty: true, //Prevents empty strings
                isAlphanumeric: true,
                len: { // Makes the error message friendly
                    args: 7,
                    msg: 'Please enter a license plate number with 7 characters'
                },
            },
        }
    });

    //Encrypting license plate number
    Cars.beforeCreate((cars) => {
        new sequelise.promise((resolve) => {
            bcrypt.hash(cars.licensePlate, null, null, (err, hashedLicensePlate) => {
                resolve(hashedLicensePlate);
            });
        }).then((hashedLp) => {
            cars.licensePlate = hashedLp;
        })
    });

    return Cars;
};