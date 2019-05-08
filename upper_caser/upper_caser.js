const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function (words) {
  const results = this.words.map((word) => {
    return word.toUpperCase()
  })
  return results
}

module.exports = UpperCaser;
