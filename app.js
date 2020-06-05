const {
  app,
  graphqlHTTP,
  ApolloServer,
  gql
} = require("./index");

const resolvers = require("./resolvers");

require("./database/connection");

// const schema = require("./schema/schema");

//const {user} = require("./typeDefs");

// const typeDefs = gql`
//   type Query {
//     users: [User],
//     hello: String
//   }
//   type User {
//     id: ID!
//     firstName: String!
//     lastName: String!
//     userEmail: String!
//     userPw: String!
//     createdAt: String!
//     updatedAt: String!
//   }
// `;

/*app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));*/


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