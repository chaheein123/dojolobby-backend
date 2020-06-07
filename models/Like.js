const Sequelize = require("sequelize");

const Like = sequelize.define("likes", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  mainentitiesId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Like.associate = function(models){
  Like.belongsTo(models.User, {foreignKey: "userId"});
  Like.belongsTo(models.MainEntity, {foreignKey: "mainentitiesId"});
};

module.exports = Like;
