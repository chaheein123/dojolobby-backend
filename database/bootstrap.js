const {
  _,
  Faker
} = require("../index");

module.exports = async() => {
  const Post = require("../models/Post");
  const User = require("../models/User");

  User.hasMany(Post, {as: "Posts", foreignKey: "userId"});
  Post.belongsTo(User, {as: "User", foreignKey: "userId"});

  const errHandler = (err) => {
    console.error("Error: ", err);
  };

  _.times(20, ()=>{
    // return User.create({
    //   firstName: Faker.name.firstName(),
    //   lastName: Faker.name.lastName(),
    //   userEmail: Faker.internet.email(),
    //   userPw: Faker.internet.password()
    // })
    let user = User.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      userEmail: Faker.internet.email(),
      userPw: Faker.internet.password()
    }).then((result) => {
      // console.log("산소부족해이", JSON.stringify(result.id))
      Post 
        .create({
          content: Faker.lorem.sentences(3),
          userId: JSON.stringify(result.id),
          createdAt: Date.now()
        })
      })
    });

  // const user = await User
  //   .create({
  //     firstName: "cococococo",
  //     lastName: "cola",
  //     userEmail: "cacaca@gmail.com",
  //     userPw: "123123123",
  //   })
  //   .then(() => User.findAll())
  //   .catch(errHandler);
  
  // const post = await Post
  //   .create({
  //     content: "I love the movies",
  //     userId: user.id,
  //     createdAt: Date.now()
  //   })
  //   .catch(errHandler);
}