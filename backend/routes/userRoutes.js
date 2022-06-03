const express = require('express');
const {
  registerUser,
  loginUser,
  getUserDashboard
} = require('../controllers/userController.js');

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', loginUser);
router.get('/dashboard/:id', getUserDashboard);

module.exports = router;
