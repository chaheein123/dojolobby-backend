const Sequelize = require("sequelize");

const Post = sequelize.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

Post.associate = function(models){
  Post.belongsTo(models.User, {foreignKey: "userId"});
};

module.exports = Post;