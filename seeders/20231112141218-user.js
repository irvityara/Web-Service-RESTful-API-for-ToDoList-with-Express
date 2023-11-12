"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "irvi",
        email: "irvi456@gmail.com",
         password: "123",
      },
      {
        username: "irham",
        email: "irham456@gmail.com",
        password: "456",
      },
      {
        username: "irbati",
        email: "irbati456@gmail.com",
        password: "123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
