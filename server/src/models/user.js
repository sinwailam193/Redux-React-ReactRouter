import mongoose, { Schema } from "mongoose";

// passing email as an object to ensure email is always unique
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

export const userModel = mongoose.model("user", userSchema);
