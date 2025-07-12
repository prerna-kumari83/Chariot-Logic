const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  photo: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: [String], // e.g., ['weekends', 'evenings']
  isPublic: { type: Boolean, default: true },
  feedback: [
    {
      from: String,
      rating: Number,
      comment: String,
      date: String,
    }
  ],
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  banned: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
