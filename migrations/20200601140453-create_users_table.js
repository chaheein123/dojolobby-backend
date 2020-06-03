'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",
      {
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
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.dropTable("users")
    )
  }
};
