const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createSwap, getSwapsForUser, updateSwapStatus } = require('../controllers/swapController');

router.post('/', auth, createSwap);
router.get('/', auth, getSwapsForUser);
router.put('/:id', auth, updateSwapStatus);

module.exports = router;
