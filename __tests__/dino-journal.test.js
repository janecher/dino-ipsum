import { JournalEntry } from './../src/dino-journal.js';

describe('create JournalEntry object', () => {
  let journalEntry;

  beforeEach(function(){
    journalEntry = new JournalEntry("title", "I have watched all Jurassic park movies");
  });

  test('should create JournalEntry object', () => {
    expect(journalEntry).toMatchObject({
      title: "title",
      body: "I have watched all Jurassic park movies"
    });
  });

  test('should count number of words in title of JournalEntry object', () => {
    expect(entry.numberOfWordsInTitle()).toBe(1);
  });

  /*test('should count number of words in body of JournalEntry object', () => {
    expect(entry.numberOfWordsInEntry()).toBe(7);
  });*/
});
