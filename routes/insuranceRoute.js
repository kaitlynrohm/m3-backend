const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const insuranceController = require("../controllers/insuranceController.js");

router.post("/api/insurance-connection", async (req, res) => {
  console.log("insurance endpoint hit");
  let message;
  !req.body.message && !req.body.history
    ? (message = "begin")
    : (message = req.body.message);

  const history = req.body.history;
  // Use function from controller
  insuranceController(message, history).then((result) => {
    res.status(200).send(result);
  });
});

module.exports = router;
