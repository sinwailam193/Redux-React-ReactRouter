const express = require("express");
const router = express.Router();
const passportService = require("./services/passport");

router.use("/api/auth", require("./routers/auth"));

module.exports = router;
