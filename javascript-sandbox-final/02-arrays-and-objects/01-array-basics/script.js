// const arr = [elem, elem, elem] // index [0,1,2]
let x;

// array literal
const numbers = [12, 45, 33, 29, 39];

// array constructor
const fruits = new Array('apple', 'grape', 'orange');

x = fruits;
x = numbers[0];
x = numbers[0] + numbers[1];
x = `my favorite fruit is an ${fruits[2]}`;
x = numbers.length;

// fruits[1] = 'dihh';

x = fruits;

// x = numbers.length = 2;
x = numbers.splice(2); // splice mutates the array. while splice doesnt
x = numbers;

// add an item to the end of the array
x = fruits[fruits.length] = 'pineapple';
x = fruits;
console.log(x);
