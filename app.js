const {
  app,
  graphqlHTTP
} = require("./index");

const schema = require("./schema/schema");

app.use("/graphql", graphqlHTTP({
  schema
}));

require("./database/connection");
// require("./database/bootstrap")();

// testing DB
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

