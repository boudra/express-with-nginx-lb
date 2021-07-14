const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const os = require("os");
const hostname = os.hostname();

app.get('/', (req, res) => {
  res.send(`Hello World from ${hostname}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

