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
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userEmail: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.dropTable("users")
    )
  }
};
