const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  from: String,
  rating: Number,
  comment: String,
  date: String,
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
