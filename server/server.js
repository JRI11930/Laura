require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const { dbService } = require("./servicios/dbService");

const app = express();

app.use(bodyParser.json());

require("./routes")(app, dbService());

app.listen(5000, function () {
  console.log("App listening on port 5000");
});
