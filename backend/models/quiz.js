const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  question: {type: String, required:true},
  options : [{
    option: {type: String, required:true}
  }],
  answer: {type: Number, required:true}
});


module.exports = mongoose.model('Quiz', quizSchema);
