const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");
const _ = require("lodash")._;
const Faker = require("faker");
const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");

// body parser middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(4000, console.log("Server started on port 4000"));

module.exports = {
  app,
  Sequelize,
  _,
  Faker,
  graphql,
  graphqlHTTP,
};