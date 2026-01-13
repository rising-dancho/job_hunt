// function reverseString(word) {
//   // console.log(word.split('').reverse().join(''));
//   return word.split('').reverse().join('');
// }

// implicit return
// const reverseString = () => word.split('').reverse().join('');

// console.log(reverseString('world'));

function reverseString(word) {
  // console.log(word.length);
  let str = [];
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}

console.log(reverseString('world'));

// module.exports = reverseString;
