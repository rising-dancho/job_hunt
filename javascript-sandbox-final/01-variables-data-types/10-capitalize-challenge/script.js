// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let initial = myString[0].toUpperCase();
let restOfTheWord = myString.slice(1);

console.log(initial + restOfTheWord);

let position_0 = myString.charAt(0).toUpperCase();

console.log(position_0 + restOfTheWord);
