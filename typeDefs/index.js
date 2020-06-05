// const post = require("./post");
// const user = require("./user");
const {gql} = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    users: [User],
    hello: String
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userEmail: String!
    userPw: String!
    createdAt: String!
    updatedAt: String!
  }
  type Post {
    id: ID!
    title: String!
    tag: String!
    content: String!
    createdAt: String!
  }
`;

module.exports = typeDefs;
