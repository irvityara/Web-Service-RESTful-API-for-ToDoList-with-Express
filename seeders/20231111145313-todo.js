'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        id: "1",
        value: "cuci baju",
      },
      {
        id: "2",
        value: "cuci piring",
      },
      {
        id: "3",
        value: "sapu rumah",
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {})
  }
};
