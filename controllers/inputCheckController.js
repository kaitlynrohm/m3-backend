const inputCheckController = (userInput) => {
  if (userInput.title && userInput.message) {
    if (userInput.message.length >= 30) {
      return true;
    } else {
      return "Error: Message to short";
    }
  } else {
    if (!userInput.message && userInput.title) {
      return "Error: Message to short";
    } else if (userInput.message && !userInput.title) {
      return "Error: No job title";
    } else if (!userInput.message && !userInput.title) {
      return "Error: no job title and no message";
    } else {
      return "Error";
    }
  }
};

module.exports = inputCheckController;
