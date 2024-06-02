const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const router = express.Router();

// connect to gemini
const { GoogleGenerativeAI } = require("@google/generative-ai");

// API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// The Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

router.post("/api/gemini-connection", async (req, res) => {
  const chat = model.startChat({
    history: req.body.history,
  });

  const message = req.body.message;

  const result = await chat.sendMessage(message);
  const response = await result.response;
  const text = response.text();

  res.send(text);
});

module.exports = router;
