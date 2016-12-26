import express from "express";
import path from "path";
import fs from "fs";
import morgan from "morgan";
import { createServer } from "http";
import { json } from "body-parser";
import router from "./router";

const port = process.env.PORT || 3000;
const app = express();
const env = app.get("env");

if (env === "production") {
  app.use(morgan("common", {
    skip: (req, res) => res.statusCode < 400,
    stream: fs.createWriteStream(
      path.join(__dirname.slice(0, __dirname.indexOf("prod")), "morgan.log"),
      { flags: "a" }
    )
  }));
} else {
  app.use(morgan("dev"));
}

app.use(json({ type: "*/*" }));
app.use("/", router);

const server = createServer(app);
server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
