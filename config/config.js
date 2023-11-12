module.exports = (env) => {
  return {
    development: {
      username: "root",
      password: "",
      database: "todolist_project",
      host: "127.0.0.1",
      dialect: "mariadb",
    },
    test: {
      username: "root",
      password: null,
      database: "database_test",
      host: "127.0.0.1",
      dialect: "mariadb",
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "mariadb",
    },
  }
  [env];
};
