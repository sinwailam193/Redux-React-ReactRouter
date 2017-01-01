import { Router } from "express";
import { auth } from "./controllers";
// require("./services/passport");

const router = Router();

router.use("/api/v0/auth", auth);

export default router;
