const Sequelize = require("sequelize");

const MainEntity = sequelize.define(
  "mainentities", 
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    }
  },
  {timestamps: false}
);

MainEntity.associate = function(models){
  MainEntity.hasMany(models.Post);
  MainEntity.hasMany(models.Like);
};

module.exports = MainEntity;