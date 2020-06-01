const {
  Sequelize
} = require("../index");

const sequelize = new Sequelize(
  "Dojolobby", 
  "postgres", 
  "root", 
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
global.sequelize = sequelize;