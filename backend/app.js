const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Quiz = require('./models/quiz');

const app = express();

mongoose.connect('mongodb+srv://dbUser:dbUserPassword@cluster0-dcaaf.mongodb.net/quiz?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to database')
})
.catch(() => {
  console.log('connection failed');

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});



module.exports = app;
