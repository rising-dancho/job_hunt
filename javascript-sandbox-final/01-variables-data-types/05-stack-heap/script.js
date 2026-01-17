// Primitive Data Type - primitives are stored on the stack
const name = 'John';
const age = 30;

// Reference Data Type - reference values are stored on the heap
const person = {
  name: 'Bradley',
  age: 40,
};

// INTERACTION WITH REASSIGNING WITH PRIMITIVES
let newName = name;

newName = 'Brando';
console.log(name, newName);

// INTERACTION WITH REASSIGNING WITH REFERENCES TYPES
let newPerson = person;
newPerson.name = 'Bombi'; // stored in the same spot in the heap.. overwrites what's stored in that heap 

let somePerson = {
  name: 'Somali',
  age: 69,
};

console.log(person, newPerson, somePerson);
