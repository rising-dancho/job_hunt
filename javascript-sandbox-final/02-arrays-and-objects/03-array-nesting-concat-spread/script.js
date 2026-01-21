let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];
// const sex = ['jakol', 'kantot', 'anal'];

// fruits.push(berries);
// berries.push(sex);
// console.log(fruits[3][3][1]);

// PUTTING ARRAY WITHIN AN ARRAY
// const allFruits = [fruits, berries];

// x = allFruits[1][2];

// CONCAT: add elements inside an array from another array
x = fruits.concat(berries);

// SPREAD OPERATOR: takes the elements inside an array and spreads it inside of a containing array
// x = [...fruits, ...berries];
// you can only spread arrays within a containing array [] and not to a variable.. so this x = ...fruits doesnt work
// x = ...fruits;
x = [...fruits, ...berries];
// BUT you can do this [...fruits, berries]; and it would just be an array within an array with spead elements
x = [...fruits, berries]; 

// FLAT: we can flatten arrays that have nested arrays inside it and basically make a complex array into a simple array with elements with no nesting
x = [1, 2, 3, [4, 5], 6, 7, [8, 9], 10];
x = x.flat();

// Static methods on Array Objects
x = Array.isArray(fruits); // true : it's an array
x = Array.isArray('Hello'); // false: it's not an array

// turns a string into an array per character
x = Array.from('123456');
x = Array.from('tae ng kalabaw');
x = Array.from('abc');

// collect variables into an array
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
