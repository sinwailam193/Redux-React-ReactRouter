const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const localStrategy = require("passport-local");
const User = require("../models/user");
const config = require("../config");

// Create local strategy
// Telling passport we're not using username, we're using email
const localOptions = {usernameField: "email"}
const localLogin = new localStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({email}, (err, user) => {
    if(err) {
      return done(err);
    }
    if(!user) {
      return done(null, false);
    }
    // compare passwords - is "password" === to user.password
    user.comparePassword(password.toString(), (err, isMatch) => {
      if(err) {
        return done(err);
      }
      if(!isMatch) {
        return done(null, false);
      }
      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: extractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

// Create JWT strategy
// payload is the decoded JWT token with sub and iat properties
// done is a callback function that we needed to call depending if we are successful authenticating the user
const validToken = new jwtStrategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists in our database
  User.findById(payload.sub, (err, user) => {
    if(err) {
      return done(err, false);
    }
    if(user) {
      // If it does, call "done" with that user, to indicate that he is allow in
      done(null, user);
    }
    else {
      // Otherwise, call "done" without a user object
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(validToken);
passport.use(localLogin);
