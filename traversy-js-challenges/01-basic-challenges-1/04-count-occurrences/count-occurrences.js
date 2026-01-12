function countOccurrences(word, char) {
  // function countOccurrences(str: string, char: string): number;
  // Examples
  // countOccurrences('hello', 'l'); // 2
  // countOccurrences('hello', 'z'); // 0
  let count = 0;
  for (i = 0; i <= word.length; i++) {
    let letter = word[i];

    if (char === letter) {
      count = count + 1;
      // count++; or count +=1;
      // console.log('Letter: ' + letter);
      // console.log('Count: ' + count);
    }
  }

  return count;
}

// countOccurrences('hellLo world', 'l');

module.exports = countOccurrences;
