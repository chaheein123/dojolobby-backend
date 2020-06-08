const {
  app,
  graphqlHTTP,
  ApolloServer,
  gql
} = require("./index");
const resolvers = require("./resolvers");
require("./database/connection");
const models = require("./models");
const typeDefs = require("./typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});
server.applyMiddleware({app});

// require("./database/bootstrap")();

// testing DB
app.listen(4000, console.log("Server started on port 4000"));
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });