const SwapRequest = require('../models/SwapRequest');

exports.createSwap = async (req, res) => {
  const swap = new SwapRequest({ ...req.body, fromUser: req.user.id });
  await swap.save();
  res.json(swap);
};

exports.getSwapsForUser = async (req, res) => {
  const swaps = await SwapRequest.find({
    $or: [{ fromUser: req.user.id }, { toUser: req.user.id }]
  }).populate('fromUser toUser', 'name email');
  res.json(swaps);
};

exports.updateSwapStatus = async (req, res) => {
  const swap = await SwapRequest.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(swap);
};
