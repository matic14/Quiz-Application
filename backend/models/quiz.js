const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  question: {type: String, required:true},
  options : [{ answer: String }, { answer: String }, { answer: String }, { answer: String }],
  correctAns: {type: String, required:true}
});


module.exports = mongoose.model('Quiz', quizSchema);
