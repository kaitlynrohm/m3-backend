const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const geminiConnection = require("../controllers/geminiConnectionFunc.js");

router.post("/api/gemini-connection", async (req, res) => {
  const title = req.body.title;
  let message;
  req.body.message ? (message = req.body.message) : (message = "begin");
  const history = req.body.history;

  // Use function from controller
  geminiConnection(message, history, title).then((result) => {
    res.send(result);
  });
});

module.exports = router;
