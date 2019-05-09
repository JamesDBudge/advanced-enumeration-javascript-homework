const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split(' ').join('').split('');
}

PangramFinder.prototype.isPangram = function () {


  const isAtLeastOneCharInPhrase = function(character, phrase) {
    return phrase.some((letter) => {
      return character === letter;
    });
  }

  return this.alphabet.every((alpha) => {
    return isAtLeastOneCharInPhrase(alpha, this.phrase)
  });




}

module.exports = PangramFinder;
