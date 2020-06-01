const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Sequelize = require("sequelize");

// body parser middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(4000, console.log("Server started on port 4000"));

module.exports = {
  app,
  Sequelize
}