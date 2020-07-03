export class JournalEntry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  numberOfWords(str) {
    let trimString = str.trim();
    while (trimString.includes("  "))
    {
      trimString = trimString.replace("  ", " ");
    }
    return trimString.split(" ").length;
  }

  numberOfWordsInTitle() {
    return this.numberOfWords(this.title);
  }

  convertBodyToArrayOfLines() {
    return this.body.split("\n");
  }

  numberOfWordsInEachParagraph() {
    let numberOfWordsArray = [];
    this.convertBodyToArrayOfLines().forEach((element) => {
      numberOfWordsArray.push(this.numberOfWords(element));
    });
    return numberOfWordsArray;
  }

  numberOfWordsInBody() {
    let number = 0;
    this.numberOfWordsInEachParagraph().forEach((element) => {
      number += element;
    });
    return number;
  }

  numberOfParagraphsInBody() {
    return this.body.split("\n").length;
  }
}