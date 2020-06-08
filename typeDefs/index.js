// const post = require("./post");
// const user = require("./user");
const {gql} = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    users: [User],
    user(id: Int!): User
    posts: [Post]

  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userEmail: String!
  }
  type Post {
    id: ID!
    title: String
    content: String
    createdAt: String
    updatedAt: String
    createdBy: User!
    
  }
`;
module.exports = typeDefs;
