module.exports = {
  Query: {
    users: async (parent, args, context, info) => {
      //console.log("hihihi", parent.getUsers());
      // return parent.getUsers()
      const users = await context.models.User.findAll();
      return users;
    },
    
    
  }
}