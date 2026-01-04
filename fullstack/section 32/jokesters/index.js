// DOCS: https://www.npmjs.com/package/give-me-a-joke#give-me-a-joke
const jokes = require('give-me-a-joke');
console.log(jokes)

jokes.getRandomDadJoke(function(joke){
  console.log(joke)
});
