'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('spaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coordinates: {
        allowNull: false,
        type: Sequelize.GEOMETRY
      },
      instructions: {
        type: Sequelize.STRING
      },
      pricePerHalfHour: {
        allowNull: false,
        type: Sequelize.NUMERIC
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('spaces');
  }
};
