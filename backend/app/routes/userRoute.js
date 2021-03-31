module.exports = app => {
  const users = require("../controller/user.controller.js")

  let router = require("express").Router()

  router.post("/savedata", users.create)

  router.get("/getusers", users.findAll)

  router.post("/deleteUser", users.deleteOne)

  router.post("/update", users.update)

  router.get("/getUserById/:id", users.findOne)

  app.use("/api", router); //context path
}