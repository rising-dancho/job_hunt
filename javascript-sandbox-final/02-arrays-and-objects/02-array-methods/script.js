let x;

let arr = [34, 55, 95, 20, 15];

x = arr.push(69); // add to the back of the array
x = arr.pop(); // remove from the back of the array

// The term SHIFT/UNSHIFT comes from early computer science and data-structure terminology:

// shift → remove (or move) the first element by shifting everything left
// unshift → reverse that operation by inserting elements at the front and shifting everything right

// So conceptually:
// shift() shifts elements left and drops the first element
// unshift() shifts elements right to make room at the front
// This naming predates JavaScript and comes from languages like Perl, which influenced JavaScript’s array API.

x = arr.unshift(); // add to the beginning
x = arr.shift(); // remove from the beginning

// arr = [34, 55, 95, 20, 15];
// x = arr.reverse(); // reverse the order of the array. mutates the array

// check if a specific value is in an array
x = arr.includes(69); // boolean: true or false

// gives the index of a specific value
x = arr.indexOf(15); // if its not present you'll get -1

x = arr.slice(0, 3); // [start index (inclusive), end index (exclusive)] // this does not change the array

arr = [34, 55, 95, 20, 15];
// x = arr.splice(0, 3); // [start index (inclusive), end index (inclusive)] // this changes the array

x = arr.splice(0, 3).reverse().toString(2).charAt(2);

console.log(x);
