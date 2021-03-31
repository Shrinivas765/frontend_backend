const express = require ("express")
const app =express();
// app.get("/",function(req, res){
//     res.send("express  text")
// })
app.listen(3001,function(){
    console.log("express server is run")
})
app.use("/users/",require("./app/route/userRoute.js"))