// Global variables
const ADD = true;
const MULTIPLY = true;

// compute function
async function compute(numbers) {
  if (ADD) {
    await addNumbers(numbers);
  }

  if (MULTIPLY) {
    await multiplyNumbers(numbers);
  }
}

// addNumbers function
function addNumbers(numbers) {
  return new Promise((resolve) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log('Sum:', sum);
    resolve();
  });
}

// multiplyNumbers function
function multiplyNumbers(numbers) {
  return new Promise((resolve) => {
    const product = numbers.reduce((acc, num) => acc * num, 1);
    console.log('Product:', product);
    resolve();
  });
}

// Example usage
compute([1, 2, 3, 4]);

const isLesser = (a, b, callback) => {
  let lesser = false;
  if (a < b) {
    lesser = true;
  }
  callback(lesser);
};
