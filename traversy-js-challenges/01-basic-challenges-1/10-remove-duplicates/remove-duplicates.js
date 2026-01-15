/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(
  removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true])
);

// const removeDuplicates = (array) => {
//   return new Set(array);
// };
module.exports = removeDuplicates;
