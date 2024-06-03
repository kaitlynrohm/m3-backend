const express = require("express");
const app = express();
app.use(express.json());
const inputCheckController = require("../controllers/inputCheckController.js");

router.post("/api/input-check", (res, req) => {
  const title = req.body.title;
  const message = req.body.message;

  const result = inputCheckController({ title: title, message: message });
});

module.exports = router;
