const express = require("express");
const app = express();
const url = require("mongoose");
const router = require("./routers/main");

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
url
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
  });
app.use("/", router);

//config ejs
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
