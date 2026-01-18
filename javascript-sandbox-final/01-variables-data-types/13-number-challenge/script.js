// let x = Math.random() * 100;
// x = Math.floor(x) + 1; // 1 - 100
// let y = Math.random() * 50;
// y = Math.floor(y) + 1; // 1 - 50

// // Create a variable for the sum, difference, product, quotient and remainder of x and y
// let sum, difference, product, quotient, remainder;
// let sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

// // ARITHMETIC OPERATION
// sum = x + y;
// difference = x - y;
// product = x * y;
// quotient = x / y;
// remainder = x % y;

// // OUTPUT
// sumOutput = `${x} + ${y} = ${sum}`;
// differenceOutput = `${x} - ${y} = ${difference}`;
// productOutput = `${x} * ${y} = ${product}`;
// quotientOutput = `${x} / ${y} = ${quotient.toFixed(2)}`;
// rmOutput = `${x} % ${y} = ${remainder}`;

// // PRINT
// console.log(sumOutput);
// console.log(differenceOutput);
// console.log(productOutput);
// console.log(quotientOutput);
// console.log(rmOutput);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  Your task is to find two numbers in the list that add up to the target, and then tell where those two numbers are located in the list (their positions, not the numbers themselves).
var twoSum = function (nums, target) {
  let x, y;
  let result = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    // console.log(nums[i]);
    x = nums[i];
    // console.log(`x: ${x}`);
    for (let j = i + 1; j < nums.length; j++) {
      y = nums[j];
      // console.log(`y: ${y}`);
      result = x + y;
      // console.log(`${x} + ${y} = ${result}`);
      if (result === target) {
        console.log(`pos1: ${i}, pos2: ${j}`);
        console.log(`${x} + ${y} = ${result}`);
        return (result = [i, j]);
      }
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
