let x;

const name = 'John';
const age = 30;

x = `Hello, my name is ${name} and my age is ${age}.`;

// String Properties and Methods
const s = new String('Hello World'); // new String turns the string into an object

x = typeof s;

x = s.length; // string property

// Access value by key
x = s[0];

// shows all the methods for the String primitive. (__proto__ only works on the browser)
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(6);
x = s.indexOf('W');

// Execution logic:
// - Start at index 0 → 'H' (inclusive)
// - Stop before index 4 (exclusive)
x = s.substring(0, 4);
x = s.substring(5); // substring can also act like a slice
x = s.slice(1); // in fact, both of them can do the same exept slice can start at the end if you provide negative numbers

x = '          Hello World      ';
x = x.trim();

x = s.replace('World', 'Itlog'); // (search, replaceWith)
x = s.includes('Hello');
x = s.includes('Hell');
x = s.includes('Hellu');
x = s.valueOf(); // get the actual value of that variable

x = s.split('');
x = s.split(' ');

console.log(x);
