const {
  graphql,
  _
} = require("../index");

const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID,
  GraphQLSchema
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {type: GraphQLID},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    userEmail: {type: GraphQLString},
    userPw: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLID}},
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
