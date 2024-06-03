const inputCheckController = (userInput) => {
  if (userInput.title && userInput.message) {
    if (userInput.message.length >= 30) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

module.exports = inputCheckController;
