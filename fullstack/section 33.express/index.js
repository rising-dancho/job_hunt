const express = require('express');
const app = express();
const port = 3000;
// console.dir(app)

// GOAL: have an incoming request get an outgoing response
// anytime we make a request this callback will run (all requests)
app.use((req, res) => {
  // console.log(`Request: ${req} `);
  // console.dir(req);
  console.log(`We got a request!`);
  console.dir(res);
  res.send(
    '<b>Hello, we got your request. This is a response from the server</b>'
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
