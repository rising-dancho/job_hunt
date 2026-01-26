// LOOP THROUGH ARRAYS
const items = ['book,', 'chair', 'table', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// OLD SCHOOL
// for (let i = 0; i <= items.length; i += 1) {
//   console.log(items[i]);
// }

// HIGH ORDER ARRAY METHODS
// FOR OF => array
// for (let item of items) {
//   console.log(item);
// }

// FOR OF => array of objects
for (let user of users) {
  console.log(user.name);
}

// LOOP over STRINGS
const word = 'Hello World';

for (letter of word){
  console.log(letter)
}
