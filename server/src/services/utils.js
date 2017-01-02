import jwt from "jwt-simple";
import { secret } from "../../config";

export const tokenForUser = user => {
  const iat = new Date().getTime();
  return jwt.encode({ sub: user.id, iat }, secret);
};
