const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })

  app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node Backend." });
});

require("./app/routes/user.route")(app);

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});