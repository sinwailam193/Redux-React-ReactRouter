const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./router");
const mongoose = require("mongoose");

// DB setup
mongoose.connect("mongodb://localhost:auth/auth");

// CORS configuration and whitelisting domain to allow cross-origin
const whitelist = ["http://localhost:8080"];
const corsOptions = {
  origin: function(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};

// App setup
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(bodyParser.json({type: "*/*"}));
app.use("/", routes);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
