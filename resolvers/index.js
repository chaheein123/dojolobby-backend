

module.exports = {
  Query: {
    // users: async (parent, args, context, info) => {
    //   const users = await context.models.User.findAll();
    //   return users;
    // },

    async users(root,args, {models}) {
      return models.User.findAll()
    },
    async user(root, {id}, {models}){
      return models.User.findByPk(id)
    },
    async posts(root, args, {models}){
      const posts = await models.Post.findAll();
      return posts;
      // return models.Post.findAll();
    }
  },

  Post: {
    // createdBy: async (root, args, {models}, info) => {

    //   console.log(models.User.findAll());
    //   const users = await models.User();
    //   return users;

    // }
    createdBy: (root, args, context, info) => root.getUsers()
  },

  // User: {

  // }
}