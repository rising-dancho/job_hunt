function countVowels(word) {
  // function countVowels(str: string): number;
  let str = '';
  let count = 0;
  for (let i = 0; i <= word.length - 1; i++) {
    // console.log(word[i]);
    word = word.toLowerCase();
    str += word[i];
    if (word[i] === 'a') {
      count++;
    }
    if (word[i] === 'e') {
      count++;
    }
    if (word[i] === 'i') {
      count++;
    }
    if (word[i] === 'o') {
      count++;
    }
    if (word[i] === 'u') {
      count++;
    }
  }
  console.log(str);
  console.log(count);
  return count;
}

// countVowels('etits');
module.exports = countVowels;
