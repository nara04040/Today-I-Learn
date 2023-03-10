type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      // word의 term에 단어가 없다면
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  del(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const pizza = new Word("pizza", "미국의 음식");
const dict = new Dict();

dict.add(kimchi);
dict.add(pizza);
