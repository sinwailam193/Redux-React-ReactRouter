import { Router } from "express";

export const auth = Router();

auth.get("/", (req, res) => {
  res.send("hello world");
});
