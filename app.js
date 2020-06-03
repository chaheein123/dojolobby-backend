const {
  app,
} = require("./index");

require("./database/connection");
require("./database/bootstrap")();

// testing DB
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

