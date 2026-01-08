// DOCS: https://www.npmjs.com/package/give-me-a-joke#give-me-a-joke
const jokes = require('give-me-a-joke');
const colors = require('colors');
console.log(jokes);
console.log(colors);

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
