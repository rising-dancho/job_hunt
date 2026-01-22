let x;

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
// };

// Key Value pair shorthand declaration
const person = {
  firstName,
  lastName,
  age,
};

// console.log(person.age);

// Desctructuring
const todo = {
  id: 1,
  title: 'Take out the trash',
  user: {
    name: 'John',
  },
};

// Destructure from the Object Literal
const {
  id,
  title,
  user: { name },
} = todo;

// console.log(id, title, name);

// Renaming Keys: temporarily
const { id: todoID } = todo;

// console.log(todoID, todo);

// Destructuring Arrays is possible: by using the "...rest" operator
const number = [12, 29, 3, 4, 5];

// const [first, second, ...rest] = number;
const [first, ...rest] = number;

// flatten works with ...rest too, but it doesnt include the first, and second
// x = number.flat();
x = rest.join();
console.log(x);
