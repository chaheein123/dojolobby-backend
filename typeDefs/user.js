const {gql} = require("../index");

module.exports = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userEmail: String!
    userPw: String!
    createdAt: String!
    updatedAt: String!
  }
`