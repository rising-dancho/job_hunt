let x;

const person = {
  name: 'John Doe',
  age: 69,
  isAdmin: true,
  address: {
    street: '69 Callalily',
    city: 'San mateo',
    state: 'Rizal',
  },
  hobbies: ['Muay Thai', 'Dota 2'],
};

x = person.name;
x = person['age'];
x = person['address'].street;
x = person.address.state;
x = person.hobbies;
x = [...person.hobbies];
x = person.hobbies.join(); // joining the array elements into a string

// CHANGING VALUES of an object literal
x = person.isAdmin = false;
x = person;

x = person.name = 'Itot';
x = person;

// DELETE
delete person.age;
x = person;

// ADD properties to the object literal on the fly
x = person.gay = 'No';
x = person;

// ADD a function inside an object literal
// named function  - THIS MAKES NO SENSE BTW! because you wont call the function by it's name! you call it by its key!
x = person.greetMyAss1 = function (name) {
  console.log(`Howdy ${name || this.name}! How's your day going?`);
};

// anonymous function
x = person.greetMyAss2 = function (name) {
  console.log(`Howdy ${name || this.name}! How's your day going?`);
};

// arrow function
x = person.greetMyAss3 = (name) => {
  console.log(`Howdy ${name || this.name}! How's your day going?`);
};

// NOT RECOMMENDED
const person2 = {
  'first name': 'Thomas',
  'last name': 'Shelby',
};

x = person;
person.greetMyAss1('kantot');

x = person2['last name'] + ', ' + person2['first name'];
console.log(x);
