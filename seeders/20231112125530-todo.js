"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        value: "Cuci Baju",
        status: false,
      },
      {
        value: "Sapu Lantai",
        status: false,
      },
      {
        value: "Kerjakan Tugas",
        status: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
