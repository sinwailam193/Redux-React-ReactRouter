import { Router } from "express";
import auth from "./routers/auth";
// require("./services/passport");

const router = Router();

router.use("/api/v0/auth", auth);

export default router;
