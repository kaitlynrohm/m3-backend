// ====== Packages and imports ====== //
const express = require("express");
const cors = require("cors"); // Import cors middleware once
const app = express();
require("dotenv").config();

//Import routes
const chatBox = require("./routes/chatBox.js");
const geminiConnection = require("./routes/geminiConnection.js");

// Middleware
const allowedOrigins = [
  // Add any frontend urls that will need to access the apis
  "https://delightful-mud-099cd9600.5.azurestaticapps.net",
  "http://localhost:5173", //vite on local
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());

// =========== ENDPOINTS =========== //
// Initial setup in Postman
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// chat box endpoint
app.use(chatBox);

// Gemini connection end point
app.use(geminiConnection);

// ============== PORT ============== //
const PORT = process.env.PORT;
app
  .listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.log("PORT is already in use.");
    } else {
      console.log("Server Errors: ", error);
    }
  });

module.exports = app;
