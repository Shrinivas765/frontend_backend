module.exports = mongoose=>{
  var dbSchema=mongoose.Schema({
    firstName : String,
    lastName : String,
    city : String,
    Address : String,
    email: String,
    Mobile_no : Number
  })
 
  const User = mongoose.model('user',dbSchema)
  return User
}