const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "root",
  dialect: "mysql",
  password: "Kepoloe#123",
  database: "express-db",
});
