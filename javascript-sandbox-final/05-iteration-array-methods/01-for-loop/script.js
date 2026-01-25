// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// BASIC LOOP
// for (let i = 1; i <= 10; i ++) {
//   console.log(`Number: ${i}`);
// }

// CONDITIONAL LOOP : adjustable to increment by even or odd
// for (let i = 1; i <= 10; i += 1) {
//   if (i === 7) {
//     console.log(`${i} is a lucky number`);
//   } else {
//     console.log(`Number: ${i}`);
//   }
// }

// NESTED LOOPS
// for (let i = 1; i <= 10; i += 1) {
//   console.log(`Number: ${i}`);
//   for (let j = 1; j <= 10; j += 1) {
//     console.log(`${i} * ${i} = ${i * j}`);
//   }
// }

// Loop through an array
const name = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// CONDITION VIA STRING
// for (let i = 0; i < name.length; i++) {
//   if (name[i] === 'Sara') {
//     console.log(`${name[i]} is the best!`)
//   } else {
//     console.log(name[i]);
//   }
// }

// CONDITION VIA INDEX
for (let i = 0; i < name.length; i += 1) {
  if (i === 2) {
    console.log(`${name[i]} is the best!`);
  } else {
    console.log(name[i]);
  }
}
