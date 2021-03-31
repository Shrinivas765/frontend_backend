const databaseConfig = require("../dbConfig/db.config.js");
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose
db.url = databaseConfig.url;
db.users = require("./user.model.js")(mongoose)

module.exports = db;