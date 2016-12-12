'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('users', [
        {
          nameFirst: "Owner",
          nameLast: "Test",
          email: "owner@mail.com",
          password: "$2a$10$GBVk6WjO/JEws1NUM7Gngeqb929M7h5yD16BdJP94eT3ktmCXQu.S",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nameFirst: "Driver",
          nameLast: "Test",
          email: "driver@mail.com",
          password: "$2a$10$ne/Dgw/j0Vyrlxv.LebCbuH7ayloD1GtRJ1xHdNZqSlpA4O/NtoqS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null, {});
  }
};
