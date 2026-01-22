const post = {
  id: 1,
  title: 'Post 1',
  body: 'This is the body',
};

// Convert an Object literal to JSON string: you convert the object literal into Stringified JSON so you can send it to the server
const str = JSON.stringify(post);

// console.log(str);

// Servers and local storage can only store strings or JSON
// JSON put back to an Object Literal
const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'This is the body1',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'This is the body2',
  },
  {
    id: 3,
    title: 'Post 3',
    body: 'This is the body3',
  },
];

const jsonStr = JSON.stringify(posts);
const obj2 = JSON.parse(jsonStr);
console.log(obj2[0].id);
console.log(obj2[1].id);
