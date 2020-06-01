const {
  Sequelize
} = require("../index");

const Person = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  userEmail: {
    type: Sequelize.STRING(254),
    allowNull: false,
    unique: true
  },
  userPw: {
    type: Sequelize.STRING(35),
    allowNull: false,
  }
})