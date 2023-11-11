const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: "mariadb",
  username: "root",
  password: "root",
  database: "todolist_project"
});

module.exports = sequelize