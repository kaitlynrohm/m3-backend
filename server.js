// ====== Packages and imports ====== //
const express = require("express");
const cors = require("cors"); // Import cors middleware once
const app = express();
require("dotenv").config();

//Import routes
const feedbackRouter = require("./routes/feedbackRoutes.js");
const geminiConnection = require("./routes/geminiConnection.js");
const insuranceRouter = require("./routes/insuranceRoute.js");

// Middleware
const allowedOrigins = [
  // Add any frontend urls that will need to access the apis
  "https://delightful-mud-099cd9600.5.azurestaticapps.net",
  "http://localhost:5173", //vite on local
  "http://frontend:5173",
];

//The callback parameter is a callback function to signal whether the request's origin is allowed
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); //null for the error parameter and true to allow the request
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", //OPTIONS is necessary for pre-flight requests
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Handle preflight requests
app.options("*", cors(corsOptions));

// =========== ENDPOINTS =========== //
app.get("/", (req, res) => {
  console.log("root endpoint hit");
  res.send("Hello Again World!");
});

app.use(feedbackRouter);
app.use(geminiConnection);
app.use(insuranceRouter);
app.use((req, res, next) => {
  console.log("Received request with headers:", req.headers);
  console.log("Received request with body:", req.body);
  next();
});

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
