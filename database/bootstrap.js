module.exports = async() => {
  const Post = require("../models/Post");
  const User = require("../models/User");
  const MainEntity = require("../models/MainEntity");

  const errHandler = (err) => {
    console.error("Error: ", err);
  };

  // User.create({
  //   firstName: "Jimmy",
  //   lastName: "Johnson",
  //   userEmail: "jjj@gmail.com",
  //   userPw: "123123123"
  // })

  // Post.create({
  //   userId: 2,
  //   mainentitiesId: 1,
  //   title: "Haha",
  //   content: "Stock market is going up a!",

  // })




  // _.times(20, ()=>{

  //   let user = User.create({
  //     firstName: Faker.name.firstName(),
  //     lastName: Faker.name.lastName(),
  //     userEmail: Faker.internet.email(),
  //     userPw: Faker.internet.password()
  //   }).then((result) => {
  //     Post 
  //       .create({
  //         content: Faker.lorem.sentences(3),
  //         userId: JSON.stringify(result.id),
  //         createdAt: Date.now()
  //       })
  //     })
  //   });
}