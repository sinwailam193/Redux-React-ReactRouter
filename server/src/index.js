import express from "express";
import { join } from "path";
import { createWriteStream } from "fs";
import morgan from "morgan";
import { json } from "body-parser";
import mongoose from "mongoose";
import router from "./router";

const port = process.env.PORT || 3000;
const app = express();
const env = app.get("env");

// Setting up mongoose promise and connecting to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:auth/auth");

if (env === "production") {
    app.use(morgan("common", {
        skip: (req, res) => res.statusCode < 400,
        stream: createWriteStream(
            join(__dirname.slice(0, __dirname.indexOf("prod")), "morgan.log"),
            { flags: "a" }
        )
    }));
} else {
    app.use(morgan("dev"));
}

app.use(json({ type: "*/*" }));
app.use("/", router);

app.listen(port);
console.log(`Server listening on http://localhost:${port}`);
