// Step 1
// Create an array of objects called library. Add 3 objects with a property of title, author, status. Title and author should be strings (whatever value you want) and status should be another object with the properties of own, reading and read. Which should all be boolean values. For all status, set own to true and reading and read to false.

const library = [
  {
    title: 'Mindset',
    author: 'Carol S. Dweck',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Start with NO',
    author: 'Jim Camp',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kyosaki',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
// You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. Set the values using dot notation.

// NOTICE THAT IT WENT TO STATUS and then READ
//  if you go directly to READ.. the read would just be added as a new property.. which is not the thing that is being asked
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step 3
// Destructure the title from the first book and rename the variable to firstBook
const { title: firstBook } = library[0];
// console.log(firstBook);

// Step 4
// Turn the library object into a JSON string
const jsonString = JSON.stringify(library);
// console.log(jsonString);
