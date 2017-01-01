import { Router } from "express";
import { userModel } from "../models";

export const auth = Router();

auth.get("/", (req, res) => {
  res.send("hello world");
});

auth.post("/", (req, res) => {
  console.log(req.body);
  res.send("this is a post request");
});
