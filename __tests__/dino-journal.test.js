import { JournalEntry } from './../src/dino-journal.js';

describe('create JournalEntry object', () => {
  let journalEntry;
  let paragraphTest;

  beforeEach(function(){
    journalEntry = new JournalEntry("title", "I have watched all Jurassic park movies");
    paragraphTest = new JournalEntry("title  ", "One\nTwo\nThree");
  });

  test('should create JournalEntry object', () => {
    expect(journalEntry).toMatchObject({
      title: "title",
      body: "I have watched all Jurassic park movies"
    });
  });

  test('should count number of words in title of JournalEntry object', () => {
    expect(journalEntry.numberOfWordsInTitle()).toBe(1);
    expect(paragraphTest.numberOfWordsInTitle()).toBe(1);
  });

  test('should return array with number of words in each paragraph', () => {
    expect(paragraphTest.numberOfWordsInEachParagraph()).toEqual([1, 1, 1]);
  });

  test('should count number of words in paragraph', () => {
    expect(journalEntry.numberOfWordsInBody()).toBe(7);
    expect(paragraphTest.numberOfWordsInBody()).toBe(3);
  });

  test('should convert the body to array of strings', () => {
    expect(paragraphTest.numberOfParagraphsInBody()).toBe(3);
  })
});
