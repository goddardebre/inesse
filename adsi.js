// Class definition for generating lorem ipsum text
class LoremIpsumGenerator {
  constructor() {
    this.words = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
      'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
      'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'
    ];
  }

  // Generate a single random word
  generateWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  // Generate a sentence of random words
  generateSentence(wordCount = 10) {
    return new Array(wordCount).fill(null)
      .map(() => this.generateWord())
      .join(' ') + '.';
  }

  // Generate a paragraph of random sentences
  generateParagraph(sentenceCount = 5) {
    return new Array(sentenceCount).fill(null)
      .map(() => this.generateSentence())
      .join(' ');
  }
}

// Usage
var lorem = new LoremIpsumGenerator();
console.log(lorem.generateParagraph());
