'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('cars', {
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
      make: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING
      },
      license: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('cars');
  }
};
