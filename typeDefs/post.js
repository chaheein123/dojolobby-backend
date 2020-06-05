const {gql} = require("../index");


module.exports = gql`
  type Post {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
  }
`

