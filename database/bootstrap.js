module.exports = async() => {
  const Post = require("../models/Post");
  const User = require("../models/User");
  const MainEntity = require("../models/MainEntity");

  const errHandler = (err) => {
    console.error("Error: ", err);
  };

  MainEntity.create().then(result => {
    Post.create({
      title: "This is awesome!!!",
      content: "I love this song!!! This sobng is awesome. This language is so easy!!",
      userEmail: "sfe@gmail.com",
      userId: 1,
      mainentitiesId:1,
    })
  })

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