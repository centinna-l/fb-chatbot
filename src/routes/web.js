const express = require("express");
const chatbotController = require("../controllers/chatbotController");
const homePageCOntroller = require("../controllers/homepageController");
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homePageCOntroller.getHomePage);
  router.get("/webhook", chatbotController.getWebhook);
  router.post("/webhook", chatbotController.postWebhook);
  return app.use("/", router);
};

module.exports = initWebRoutes;
