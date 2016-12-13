'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('spaces', [
        {
          userId: 1,
          address1: "656 6th Avenue",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10011",
          coordinatePoint: "0101000020E6100000E11D8590987F52C072DAF8B8DB5E4440",
          latitude: "40.7410804",
          longitude: "-73.99368679999999",
          instructions: null,
          pricePerHalfHour: 2.00,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address1: "191 7th Avenue",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10011",
          coordinatePoint: "0101000020E6100000E4C0069FC17F52C02310AFEB175F4440",
          latitude: "40.7429175",
          longitude: "-73.9961927",
          instructions: null,
          pricePerHalfHour: 3.00,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address1: "150 West 17th Street",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10011",
          coordinatePoint: "0101000020E61000007E5AA038DB7F52C0BE141E34BB5E4440",
          latitude: "40.740088",
          longitude: "-73.9977552",
          instructions: null,
          pricePerHalfHour: 5.00,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address1: "125 West 14th Street",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10011",
          coordinatePoint: "0101000020E61000002457563FDB7F52C07566CC6E775E4440",
          latitude: "40.7380198",
          longitude: "-73.99775679999999",
          instructions: null,
          pricePerHalfHour: 2.50,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          address1: "150 5th Avenue",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10010",
          coordinatePoint: "0101000020E6100000009B62C4747F52C0A1D05735AD5E4440",
          latitude: "40.7396609",
          longitude: "-73.9915019",
          instructions: null,
          pricePerHalfHour: 2.00,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address1: "341 West 36th Street",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10018",
          coordinatePoint: "0101000020E610000044554CA59F7F52C0AB9FED878E604440",
          latitude: "40.7543497",
          longitude: "-73.99411900000001",
          instructions: null,
          pricePerHalfHour: 2.50,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address1: "311 West 34th Street",
          address2: null,
          city: "New York",
          state: "NY",
          zip: "10001",
          coordinatePoint: "0101000020E61000007E3C4F97A07F52C09337763F5D604440",
          latitude: "40.75284569999999",
          longitude: "-73.9941767",
          instructions: null,
          pricePerHalfHour: 3.50,
          active: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('spaces', null, {});
  }
};
