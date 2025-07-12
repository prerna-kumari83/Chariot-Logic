const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAllUsers, getUser, updateUser } = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/me', auth, updateUser);

module.exports = router;
