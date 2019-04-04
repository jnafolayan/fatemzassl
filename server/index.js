const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.use((err, req, res, next) => {
  res.sendFile('../dist/index.html');
});

app.listen(port, () => console.log(`Application running on port ${port}`));