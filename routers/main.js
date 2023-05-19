const express = require("express");
const router = express.Router();
const { home, answer } = require("../controllers/QA");

router.get("/", home);

router.post("/answer", answer);

module.exports = router;
