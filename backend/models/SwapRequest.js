const mongoose = require('mongoose');

const SwapRequestSchema = new mongoose.Schema({
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  offeredSkill: String,
  wantedSkill: String,
  message: String,
  status: { type: String, enum: ['Requested', 'Pending', 'Accepted', 'Rejected', 'Deleted'], default: 'Requested' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SwapRequest', SwapRequestSchema);
