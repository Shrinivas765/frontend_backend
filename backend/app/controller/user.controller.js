const db = require ("../models");
const User = db.users;

exports.create = (req, res) => {
  console.log(req.body.firstName)
  // console.log(status)
  const user = new User({
  
      firstName : req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      // Address : req.body.Address,
      email: req.body.email,
      // Mobile_no : req.body.Mobile_no,
      status: 500
  
  });

  user.save(user)
  .then(data => {
    console.log(data)
   res.send(data);

})
}; 
exports.findAll=(req,res)=>{
  // console.log("check")
  User.find()
  .then(data=>{
// console.log(data)
    res.send(data)
  })
}


// exports.deleteOne = (req, res) => {
//   console.log(req.body.firstName)
//   User.deleteOne({"firstName" : req.body.firstName}, (err) => {
//     if(err){
//       res.send(err)
//   }})

//   User.find()
//   .then(userData => {
//     console.log(userData)
//     res.send(userData)
//   })
// }