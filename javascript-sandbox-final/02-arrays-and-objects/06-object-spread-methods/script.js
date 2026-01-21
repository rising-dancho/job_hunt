let x;

// DECLARE OBJECT: Object Literal
let todo = {};
todo.id = 1;

// DECLARE OBJECT: Object Constructor
todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = true;

x = todo;

// NESTED OBJECT LITERALS
const person = {
  address: {
    coords: {
      lat: 42.1232,
      long: -71.12123,
    },
  },
};

x = `latitude: ${person.address.coords.lat}`;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

let obj3 = { obj1, obj2 };

x = obj3;
x = obj3 = { ...obj1, ...obj2 };

// Object methods
x = obj4 = Object.assign({ ...obj1, ...obj2 });

// Array of Object literals
const todos = [
  { id: 1, name: 'Buy milk' },
  { id: 2, name: 'Mop floor' },
  { id: 3, name: 'Sweep floor' },
  { id: 4, name: 'Do laundry' },
];

x = todos;

// accessing the property of an object inside an array
x = todos[0].name;

// GET KEYS: Take the keys and save them into arrays
x = Object.keys(todo);

// .length doesnt work on Object literal
x = todo.length;
// However, we can take all he keys and run .length on it
x = Object.keys(todos).length;

// GET VALUES only and store into array
x = Object.values(todo).join();
x = Object.values(todo);

// GET KEY VALUE PAIRS
let a = Object.entries(todo)[0];
let b = Object.entries(todo)[1];
let c = Object.entries(todo)[2];

// x = Array.isArray(a);
x = Array.of(...a, ...b, ...c).join();

// CHECK IF PROPERTY IS PRESENT: call it on the actual object
x = todo.hasOwnProperty('name');
console.log(x);
