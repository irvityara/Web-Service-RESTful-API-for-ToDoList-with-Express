"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Irvi",
        email: "irvityara456@gmail.com",
        username: "irvi",
        password: "123",
      },
      {
        name: "Irham",
        email: "irham456@gmail.com",
        username: "irham",
        password: "123",
      },
      {
        name: "Irbati",
        email: "irbati456@gmail.com",
        username: "irbati",
        password: "123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
