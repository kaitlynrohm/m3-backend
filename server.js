// ====== Packages and imports ====== //
const express = require("express");
const cors = require("cors"); // Import cors middleware once
const app = express();
require("dotenv").config();

//Import routes
const chatBox = require("./routes/chatBox.js");

// Middleware
app.use(cors());
app.use(express.json());

// =========== ENDPOINTS =========== //
// Initial setup in Postman
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// chat box endpoint
app.use(chatBox);

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
