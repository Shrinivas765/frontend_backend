// module.exports = mongoose => {
//   const User = mongoose.model("user", mongoose.Schema({
//     firstName : String,
//     lastName : String,
//     city : String,
//     email: String
//   }))
//   return User
// }

module.exports = mongoose=>{
  var dbSchema=mongoose.Schema({
    firstName : String,
    lastName : String,
    city : String,
    email: String
  })
 
  const User = mongoose.model('user',dbSchema)
  return User
}