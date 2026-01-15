/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
// function titleCase(str: string): string;
function titleCase(sentence) {
  // console.log(sentence.split(''));
  // normalize

  let word = sentence.split(' ');
  console.log(`split word length: ${word.length}`);
  // titleCase
  let titleCase = '';

  for (let i = 0; i <= word.length - 1; i++) {
    // console.log(word[i][0].toUpperCase() + word[i].slice(1));
    titleCase += word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
    // console.log(titleCase)

    if (i !== word.length - 1) {
      titleCase += ' ';
    }
  }
  return titleCase;
}

console.log(titleCase('sHoRt AnD sToUt'));
// module.exports = titleCase;
