const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("passport");
const User = require("../models/user");
const config = require("../config");

const requireAuth = passport.authenticate("jwt", {session: false});
const requireLogin = passport.authenticate("local", {session: false});

// Generating a token with JWT for user
function tokenForUser(user) {
  // For JWT, it has a "sub" property, subject, of who this token is about
  // iat stands for "issue at", the time that this token is created
  const timestamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

router.get("/", requireAuth, (req, res) => {
  res.send({
    response: "valid user"
  });
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({
      error: "You must provide email and password"
    });
  }

  // See if a user with the given email exists
  User.findOne({email}, (err, exisitingUser) => {
    if(err) {
      return next(err);
    }

    // If a user with email does exist, return an error
    if(exisitingUser) {
      // res.status changes the status code to 422
      return res.status(422).send({
        error: "Email is in use"
      });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({email, password});
    user.save(err => {
      if(err) {
        return next(err);
      }
      // Respond to request indiciating the user was created
      res.send({
        token: tokenForUser(user)
      });
    });
  });
});

router.post("/login", requireLogin, (req, res, next) => {
  // User already has their email and password auth'd
  // we just need to give them a token
  // Thanks to passport, we get a req.user from the user loging in
  res.send({
    token: tokenForUser(req.user)
  });
});

module.exports = router;
