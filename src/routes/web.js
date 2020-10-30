const express = require("express");
const homePageCOntroller = require("../controllers/homepageController");
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homePageCOntroller.getHomePage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
