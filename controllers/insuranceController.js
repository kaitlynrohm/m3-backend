// Imports
require("dotenv").config();

// connect to gemini
const { GoogleGenerativeAI } = require("@google/generative-ai");

// API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Function for gemini connection

const insuranceController = async (message, history) => {
  // The Gemini model
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: ``,
  });

  let chat;

  if (history) {
    chat = model.startChat({ history: history });
  } else {
    chat = model.startChat();
  }

  const result = await chat.sendMessage(message);
  const response = await result.response;
  const text = response.text();

  if (text) {
    return text;
  }
};

module.exports = insuranceController;
