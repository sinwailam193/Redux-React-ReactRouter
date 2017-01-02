import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import localStrategy from "passport-local";
import { userModel } from "../models";
import { secret } from "../../config";

// setup local strategy
const localOptions = { usernameField: "email" };
const localLogin = new localStrategy(localOptions, async (email, password, done) => {
  const user = await userModel.findOne({ email });
  if (user) {
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err, false);
      if (isMatch) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  } else {
    done(null, false);
  }
});

// setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: secret
};

// create JWT Strategy
const jwtLogin = new Strategy(jwtOptions, async (decodedToken, done) => {
  const user = await userModel.findById(decodedToken.sub);
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
