const MarkovMachine = require("./markov");

const text = "the quick brown fox jumps over the lazy dog";

describe("MarkovMachine", () => {
  test("chains are created properly", () => {
    const machine = new MarkovMachine(text);
    expect(machine.chains).toBeDefined();
    expect(machine.chains["the"]).toContain("quick");
  });

  test("generated text starts with a word from the input text", () => {
    const machine = new MarkovMachine(text);
    const generatedText = machine.makeText(10);
    const firstWord = generatedText.split(" ")[0];
    expect(machine.words).toContain(firstWord);
  });

  test("generated text has the correct number of words", () => {
    const machine = new MarkovMachine(text);
    const generatedText = machine.makeText(5);
    const generatedWords = generatedText.split(" ");
    expect(generatedWords.length).toBeLessThanOrEqual(5);
  });

  test("generated text has only words from the input text", () => {
    const machine = new MarkovMachine(text);
    const generatedText = machine.makeText(10);
    const generatedWords = generatedText.split(" ");
    generatedWords.forEach(word => {
      expect(machine.words).toContain(word);
    });
  });

  test("generated text does not exceed the input text length", () => {
    const machine = new MarkovMachine(text);
    const generatedText = machine.makeText(100);
    const generatedWords = generatedText.split(" ");
    expect(generatedWords.length).toBeLessThanOrEqual(machine.words.length);
  });
});
