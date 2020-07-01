export class JournalEntry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  numberOfWords(str) {
    while (str.includes("  "))
    {
        str = str.replace("  ", " ");
    }
    return str.split(" ").length;
  }

  numberOfWordsInTitle() {
    return this.numberOfWords(this.title);
  }

  numberOfWordsInEntry() {
    return this.numberOfWords(this.body);
  }

  numberOfParagraphsInBody() {
    return this.body.split("\n\n").length;
  }

}
