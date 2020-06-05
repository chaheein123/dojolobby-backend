const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const _ = require("lodash")._;
const Faker = require("faker");
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const resolvers = require("./resolvers");
const {ApolloServer, gql} = require("apollo-server-express");

module.exports = {
  app,
  Sequelize,
  _,
  Faker,
  graphql,
  graphqlHTTP,
  ApolloServer,
  gql
};

// Middlewares
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
