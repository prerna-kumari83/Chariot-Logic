const User = require('../models/User');

exports.addFeedback = async (req, res) => {
  const { userId, from, rating, comment, date } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ msg: 'User not found' });
  user.feedback.push({ from, rating, comment, date });
  await user.save();
  res.json(user.feedback);
};
