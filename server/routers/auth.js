const express = require("express");
const router = express.Router();
const User = require("../models/user");

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
        success: true
      });
    });
  });
});

module.exports = router;
