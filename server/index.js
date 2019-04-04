const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use((err, req, res, next) => {
  res.sendFile('../dist/index.html');
});

app.listen(8080, () => console.log('Application running on port 8080'));