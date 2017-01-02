import { Router } from "express";
import { userModel } from "../models";
import { tokenForUser } from "../services/utils";

export const auth = Router();

auth.get("/", (req, res) => {
  res.send("hello world");
});

auth.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: "you must provide an email and a password" });
  }

  // find a user with the same email in the DB
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    return res.status(422).send({ error: "email is in use" });
  }

  // no user exist, then we save the user into DB and save it
  const user = new userModel({ email, password });
  await user.save();

  res.send({ token: tokenForUser(user) });
});

auth.post("/signin", async (req, res) => {
  res.send("signing in");
});
