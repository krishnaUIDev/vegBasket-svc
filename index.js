require("dotenv").config();
const express = require("express");
const app = express();
var app_instance = process.argv.NODE_APP_INSTANCE;
process.argv.NODE_APP_INSTANCE = "";
const config = require("config");
process.argv.NODE_APP_INSTANCE = app_instance;

const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// let options = {
//   swaggerDefinition: {
//     info: {
//       description: "This is a sample server",
//       title: "Swagger",
//       version: "1.0.0",
//       servers: ["http://localhost:3001"],
//     },
//   },
//   apis: ["./routes/*.js"], //Path to the API handle folder
// };

// const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup("./swagger_output.json"));

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
