const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

let options = {
  swaggerDefinition: {
    info: {
      description: "This is a sample server",
      title: "Swagger",
      version: "1.0.0",
      servers: ["http://localhost:3001"],
    },
  },
  apis: ["../routes/*.js"], //Path to the API handle folder
};

module.exports = function (app) {
  const swaggerDocs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
