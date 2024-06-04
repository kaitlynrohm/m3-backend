const inputCheckController = require("../controllers/inputCheckController.js");

describe("Check the input", () => {
  describe.each([
    [
      "Everything is ok with the input",
      {
        title: "junior developer",
        message:
          "When working in a team I ensure that I communicate often and clearly with the others in my team. I do this by frequently requesting feedback on my designs and answering any questions as soon as I can.",
      },
      true,
    ],
    [
      "No job title correct message",
      {
        title: "",
        message:
          "When working in a team I ensure that I communicate often and clearly with the others in my team. I do this by frequently requesting feedback on my designs and answering any questions as soon as I can.",
      },
      "Error: No job title",
    ],
    [
      "Message is too short, title is fine",
      { title: "junior developer", message: "I have experience in UX" },
      "Error: Message to short",
    ],
    [
      "Message too short, no title",
      { title: "", message: "" },
      "Error: no job title and no message",
    ],
  ])(
    "Ensure all tests come back as expected",
    (testCase, userInput, expectedResult) => {
      test(`Test should check ${testCase}`, () => {
        expect(inputCheckController(userInput)).toEqual(expectedResult);
      });
    }
  );
});
