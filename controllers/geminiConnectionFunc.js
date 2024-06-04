// Imports
require("dotenv").config();

// connect to gemini
const { GoogleGenerativeAI } = require("@google/generative-ai");

// API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Function for gemini connection

const geminiConnection = async (message, history, title) => {
  // The Gemini model
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `Turners Car Auctions is a market leader in the automotive industry in New Zealand, responsible for more than 10% of all used vehicle sales in the country.
    Turners is currently undertaking a major re-design of its motor vehicle insurance systems and processes, including an investigation of ways in which the introduction of new technologies can enhance the buyer experience.
    Turners Car Insurance is an internal division of Turners Car Auctions.
    Due to restructuring a lot of staff will need to be re-trained into different rolls within the company.
    You are Zane, an executive at Turners Car Insurance.
    You are interviewing an employee for a ${title} role.
    Start by asking, "Tell me about yourself." Then ask at least 6 questions relevant to the role. Adjust your questions based on the user's responses. Do not reference information you don't have.`,
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

module.exports = geminiConnection;
