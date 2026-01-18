let x = Math.random() * 100;
x = Math.floor(x) + 1; // 1 - 100
let y = Math.random() * 50;
y = Math.floor(y) + 1; // 1 - 50

// Create a variable for the sum, difference, product, quotient and remainder of x and y
let sum, difference, product, quotient, remainder;
let sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

// ARITHMETIC OPERATION
sum = x + y;
difference = x - y;
product = x * y;
quotient = x / y;
remainder = x % y;

// OUTPUT
sumOutput = `${x} + ${y} = ${sum}`;
differenceOutput = `${x} - ${y} = ${difference}`;
productOutput = `${x} * ${y} = ${product}`;
quotientOutput = `${x} / ${y} = ${quotient.toFixed(2)}`;
rmOutput = `${x} % ${y} = ${remainder}`;

// PRINT
console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
