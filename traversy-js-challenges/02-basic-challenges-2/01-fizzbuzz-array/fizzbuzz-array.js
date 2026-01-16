// In this challenge, you will write a function called fizzBuzzArray that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".
/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
// function fizzBuzzArray(num: number): any[];

function fizzBuzzArray(endOfArray) {
  let result = [];

  for (let i = 1; i <= endOfArray; i++) {
    // console.log(i);

    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5  === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(i);
    }
  }

  return result;
}

// console.log(fizzBuzzArray(15));

module.exports = fizzBuzzArray;
