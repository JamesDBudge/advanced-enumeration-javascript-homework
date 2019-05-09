const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  const word = {};

    for (const letter of this.word) {
      if (word[letter]) {
        return false
      }
      else {
        word[letter] = 1;
      }
    }

    return true;
}

module.exports = IsogramFinder;
