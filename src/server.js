require("dotenv").config();
const express = require("express");
const viewEngine = require("./config/viewEngine");
const initWebRoute = require("./routes/web");
const bodyParser = require("body-parser");

const app = express();

//config the view engine
viewEngine(app);
//use body parser to post data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//all the web routes
initWebRoute(app);

//Port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
