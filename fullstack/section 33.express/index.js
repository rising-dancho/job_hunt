const express = require('express');
const app = express();
const port = 3000;
// console.dir(app)

// GOAL: have an incoming request get an outgoing response
// anytime we make a request this callback will run (all requests)
// .use is a catch all response
// app.use((req, res) => {
//   // console.log(`Request: ${req} `);
//   // console.dir(req);
//   console.log(`We got a request!`);
//   console.dir(res);
//   // res.send({ color: 'red' });
//   res.send(
//     '<b>Hello, we got your request. This is a response from the server</b>'
//   );
// });

// /cats => 'meow'
// /dogs => 'woof'
// '/'

// BASIC ROUTES
app.get('/cats', (req, res) => {
  res.send('meow!');
});

app.post('/cats', (req, res) => {
  res.send('POST REQUEST from client. this is a response!! /cats route');
});

app.get('/dogs', (req, res) => {
  res.send('woof!');
});

app.get('/', (req, res) => {
  res.send('Welcome to my domain');
});

// PARAMETERS

app.get('/r/:subreddit', (req, res) => {
  // console.log(req.params);
  const { subreddit } = req.params;
  console.log(subreddit);
  res.send(`<h1>This is a subreddit for ${subreddit}!!</h1>`);
});

app.get('/r/:subreddit/comments/:postId/:title', (req, res) => {
  // console.log(req.params);
  const { subreddit, postId, title } = req.params;
  console.log(subreddit, postId, title);
  res.send(
    `<h1>Viewing post with ID: ${postId} with Title: ${title}, this is the ${subreddit} subreddit!!</h1>`
  );
});

app.get('/search', (req, res) => {
  console.log(req.query); // contains keyvalue pairs based upon the query of the client
  const { q } = req.query;
  res.send(`Search results for: ${q}`);
});

app.get(/(.*)/, (req, res) => {
  res.send('I dont know this path');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
