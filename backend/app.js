const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  res.send('Hello from express!');
});

module.exports = app;
