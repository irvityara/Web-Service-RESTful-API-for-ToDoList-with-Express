"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "password", {
      type: DataTypes.STRING,
      after: "username",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "password");
  },
};
