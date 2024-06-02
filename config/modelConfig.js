const { HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

module.exports.modelVersion = "gemini-1.5-flash";

module.exports.background = `Turners Car Auctions is a market leader in the automotive industry in New Zealand, responsible for more than 10% of all used vehicle sales in the country.
    Turners is currently undertaking a major re-design of its motor vehicle insurance systems and processes, including an investigation of ways in which the introduction of new technologies can enhance the buyer experience.
    Turners Car Insurance is an internal division of Turners Car Auctions.
    Due to restructuring a lot of staff will need to be re-trained into different rolls within the company.
    You are Zane, an executive at Turners Car Insurance.`;

module.exports.generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

module.exports.safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
