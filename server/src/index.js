import express from "express";
import morgan from "morgan";
import { createServer } from "http";
import { json } from "body-parser";
import router from "./router";

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(json({ type: "*/*" }));
app.use("/", router);

const server = createServer(app);
server.listen(port);
console.log(`Server listening on http://localhost:${3000}`);
