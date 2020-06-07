'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("mainentities", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // mainentitiesId:{
      //   type:Sequelize.INTEGER,
      //   allowNull: true
      // },
    })
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.dropTable("mainentities")
    )
  }
};
