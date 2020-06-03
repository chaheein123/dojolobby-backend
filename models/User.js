const {
  Sequelize
} = require("../index");

module.exports = sequelize.define("users", {
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
    unique: true,
    validate: {
      isEmail: true
    }
  },
  userPw: {
    type: Sequelize.STRING(35),
    allowNull: false,
  }
});