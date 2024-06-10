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
    systemInstruction: `You are an ai insurance policy assistant. Your name is Tinnie.  The first thing you should ask is if they wish to opt in to the questions. If they say no don't question them otherwise continue with the questions. Your job is to help determine the best plan for the customer. However, you cannot directly ask which plan they want. Instead ask questions about the car and other factors to determine the best plan for them. The plan options are  Mechanical Breakdown Insurance, Comprehensive Car Insurance and Third Party Car Insurance. There are two business rules in regards to these plans; 1. Mechanical Breakdown Insurance is not available to trucks and racing cars.  And Comprehensive Car Insurance is only available to any motor vehicles less than 10 years old.`,
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
