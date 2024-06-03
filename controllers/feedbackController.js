require("dotenv").config();
const {
  modelVersion,
  background,
  generationConfig,
  safetySettings,
} = require("../config/modelConfig.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require("axios");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const constructSystemInstruction = (title, history) => {
  return `${background}
  You have finished interviewing an employee for a ${title} role.
  Here is a summary of the interview so far: ${history}
  Provide the interviewee feedback on their answers in the interview`;
};

module.exports.postFeedback = async (req, res) => {
  const { title, history } = req.body;
  console.log(req.body);
  if (!history) {
    return res.status(400).json({ error: "No conversation history received" });
  }
  if (!title) {
    return res.status(400).json({ error: "No job title received" });
  }

  const systemInstruction = constructSystemInstruction(
    title,
    JSON.stringify(history)
  );
  const model = genAI.getGenerativeModel({
    model: modelVersion,
    generationConfig,
    safetySettings,
    systemInstruction,
  });

  const prompt = "Provide interview feedback.";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    if (!text) {
      return res
        .status(500)
        .json({ feedback: "The model couldn't generate feedback." });
    }
    return res.status(200).json({ feedback: text });
  } catch (error) {
    console.error("Error generating content:", error);
    return res.status(500).json({ error: "Failed to generate feedback" });
  }
};
