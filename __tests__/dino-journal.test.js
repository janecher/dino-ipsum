import { JournalEntry } from './../src/dino-journal.js';

describe('create JournalEntry object', () => {
  let journalEntry;
  let paragraphTest;

  beforeEach(function(){
    journalEntry = new JournalEntry("title", "I have watched all Jurassic park movies");
    paragraphTest = new JournalEntry("title", "One\nTwo\nThree");
  });

  test('should create JournalEntry object', () => {
    expect(journalEntry).toMatchObject({
      title: "title",
      body: "I have watched all Jurassic park movies"
    });
  });

  test('should count number of words in title of JournalEntry object', () => {
    expect(journalEntry.numberOfWordsInTitle()).toBe(1);
  });

  test('should count number of words in body of JournalEntry object', () => {
    expect(journalEntry.numberOfWordsInEntry()).toBe(7);
  });

  test('should count number of paragraphs by spliting the body property by new line characters and returning the length', () => {
    expect(paragraphTest.numberOfParagraphsInBody()).toBe(3);
  })
});
