const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const {ApolloServer, gql} = require("apollo-server-express");

module.exports = {
  app,
  Sequelize,
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
