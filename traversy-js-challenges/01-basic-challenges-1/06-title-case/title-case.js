function titleCase(word) {
  // console.log(word.split(' '));
  const sentence = word.toLowerCase().split(' ');
  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i][0]); // first letter
    // console.log(sentence[i].slice(1));
    let words = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    // console.log(words);
    result += words;

    // conditionally add trailing spaces
    if (i !== sentence.length - 1) {
      result += ' ';
    }
  }

  return result;
}
// console.log(titleCase('etits ng kalabaw'));

module.exports = titleCase;
