const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "todolist-project"
});

module.exports = sequelize