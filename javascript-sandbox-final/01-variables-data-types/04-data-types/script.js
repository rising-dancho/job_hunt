// Primitive Data Types

// String
const firstName = 'Sara';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasKids = true;

// Null - intentional empty value
const apartmentNumber = null;

// Undefined
let score;

// Symbol
const id = Symbol('id');

// BigInt
const n = 2342342342123123123124245n;

// Reference Data Types - any reference type is an object
const numbers = [1, 2, 3, 4, 5];
const person = {
  name: 'Adfinem',
};
function sayHi() {
  console.log('Hi!');
}
const output = sayHi;

console.log(output, typeof output);
