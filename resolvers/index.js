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
      
      // return models.Post.findAll({include:["posts"]})
      return models.Post.findAll();
    }
  },

  Post: {
    createdBy(post){
      // console.log("jojo",post.userId);
      return post.getUser();

      // return {
      //   "firstName": "aaa"
      // };
    }
  },

  User : {
    posts(user){
      console.log(user);
      // return user.getPost();
    }
  }
}