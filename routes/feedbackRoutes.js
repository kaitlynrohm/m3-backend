const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController.js")

router.post("/feedback", feedbackController.postFeedback);

module.exports = router;
