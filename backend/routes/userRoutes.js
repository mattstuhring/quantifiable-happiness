const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController.js');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', loginUser);

module.exports = router;
