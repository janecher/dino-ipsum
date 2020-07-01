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

export async function dinoIpsum(words, paragraphs) {
  let response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`);
  let data = await response.json();
  return data;
}