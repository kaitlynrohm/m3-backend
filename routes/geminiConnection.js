const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const geminiConnection = require("../controllers/geminiConnectionFunc.js");
const userCheck = require("../controllers/inputCheckController.js");

router.post("/api/gemini-connection", async (req, res) => {
  console.log("Gemini endpoint hit");
  const title = req.body.title;
  let message;
  !req.body.message && !req.body.history
    ? (message = "begin")
    : (message = req.body.message);

  const history = req.body.history;

  const result = userCheck({ title: title, message: message });

  if (result === true || message === "begin") {
    // Use function from controller
    geminiConnection(message, history, title).then((result) => {
      res.status(200).send(result);
    });
  } else {
    res.status(422).send(result);
  }
});

module.exports = router;
