const express = require("express");
const router = express.Router();
const { askQuestion } = require("../controllers/questionController");

router.post("/askQuestion", askQuestion);

module.exports = router;
