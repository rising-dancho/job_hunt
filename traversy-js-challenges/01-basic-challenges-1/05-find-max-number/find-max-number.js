// function findMaxNumber(arr) {
//   console.log(Math.max(...arr));
// }

// findMaxNumber([2, 1, 9, 16, 10]);

const findMaxNumber = (arr) => {
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let maximumNumber = arr[0];

  for (i = 0; i <= arr.length; i++) {
    // console.log(arr[i]);
    if (maximumNumber < arr[i]) {
      let newMaximumNumber = arr[i];
      maximumNumber = newMaximumNumber;
    }
  }

  return maximumNumber;
};

const result = findMaxNumber([2, 1, 9, 16, 10]);
console.log(result);

// module.exports = findMaxNumber;
