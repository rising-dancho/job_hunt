import express from 'express';
const app = express();
const port = 4000;

const codeSnippet = require('./.devcontainer/codeSnippet.js');

app.get('/', (req, res) => {
  res.send('Hello CodeSandbox!');
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});

// Middleware to parse JSON body
app.use(express.json());

/**
 * 1️⃣ Switch 1s and 2s
 * POST /switch12
 * Body: { "strSwitch": "1212121" }
 * Response: { "result": "2121212" }
 */

app.get('/switch123', (req, res) => {
  let strSwitch = '121212';
  let result = '';
  for (let i = 0; i < strSwitch.length; i++) {
    result +=
      strSwitch[i] === '1' ? '2' : strSwitch[i] === '2' ? '1' : strSwitch[i];
  }
  res.send({ result });
});

/**
 * 6️⃣ Toggle case
 * GET /toggle-case
 * Body: { "strToggle": "NoDeJS" }
 * Response: { "result": "nOdEjs" }
 */

app.get('/toggle-case', (req, res) => {
  const strToggle = 'NoDeJS';
  let result = '';

  for (let i = 0; i < strToggle.length; i++) {
    const char = strToggle[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  res.send({ result });
});
