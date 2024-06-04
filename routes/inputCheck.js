const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
require("dotenv").config();
const inputCheckController = require("../controllers/inputCheckController.js");

router.post("/api/input-check", (req, res) => {
  const title = req.body.title;
  const message = req.body.message;

  const result = inputCheckController({ title: title, message: message });

  if (result === true) {
    const data = res.body;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(
      `${process.env.VITE_REACT_APP_BACKEND_URL}/api/gemini-connection`,
      requestOptions
    ).then((response) => {
      console.log(response.data);
      res.send(response.data);
    });
  } else {
    res.send(result);
  }
});

module.exports = router;
