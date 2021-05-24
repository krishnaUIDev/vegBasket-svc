require("dotenv").config();
const express = require("express");
const app = express();
var app_instance = process.argv.NODE_APP_INSTANCE;
process.argv.NODE_APP_INSTANCE = "";
const config = require("config");
process.argv.NODE_APP_INSTANCE = app_instance;

app.set("view engine", "pug");
app.set("views", "./views"); // to set default template

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || config.get("PORT");
app.listen(port, () => console.log(`Listening on port ${port}...`));
