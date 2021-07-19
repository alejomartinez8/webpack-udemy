const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  console.log(pathToHtmlFile);
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.listen(4000, () => {
  console.log('Application is running in port', 4000);
});
