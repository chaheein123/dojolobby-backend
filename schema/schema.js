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
    content: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        return _.find(, {id: args.id})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
