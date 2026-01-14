// if the original word is the same as the reverse of that word its a palindrome
function isPalindrome(word) {
  let original = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(`original: ${original}`);
  let reversed = '';

  for (let i = original.length - 1; i >= 0; i--) {
    // console.log(word[i]);
    reversed += original[i];
  }
  console.log(`reversed: ${reversed}`);
  // console.log(reversed);
  // return boolean;

  if (original === reversed) {
    return true;
  }
  return false;
}

console.log(isPalindrome('madam %^&$%@#'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('A man, a plan, a canal, Panama'));
console.log(isPalindrome('12321'));
module.exports = isPalindrome;
