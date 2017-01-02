import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt-nodejs";

// passing email as an object to ensure email is always unique
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// Before user is saved, we hash the password with salt
userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, (genSaltErr, salt) => {
    if (genSaltErr) return next(genSaltErr);
    bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
      if (hashErr) return next(hashErr);
      user.password = hash;
      next();
    });
  });
});

export const userModel = mongoose.model("user", userSchema);
