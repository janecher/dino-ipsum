import { JournalEntry } from './../src/dino-journal.js';

describe('create JournalEntry object', () => {

  test('should create JournalEntry object', () => {
    const entry = new JournalEntry("title", "entry");
    expect(entry).toMatchObject({
      title: "title",
      entry: "entry"
    });
  });
});
