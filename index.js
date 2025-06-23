// server.js

const express = require('express');
const app = express();
const port = 3000;

let helloCount = 0;

app.get('/hello', (req, res) => {
  helloCount++;
  res.json({ message: 'Hello, wer!', count: helloCount });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
