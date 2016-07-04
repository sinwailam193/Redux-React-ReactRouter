const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const routes = require("./router");
const mongoose = require("mongoose");

// DB setup
mongoose.connect("mongodb://localhost:auth/auth")

// App setup
app.use(morgan("dev"));
app.use(bodyParser.json({type: "*/*"}));
app.use("/", routes);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
