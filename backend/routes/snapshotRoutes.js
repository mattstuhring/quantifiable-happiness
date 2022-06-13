const express = require('express');
const {
  getUserSnapshots,
  createUserSnapshot
} = require('../controllers/snapshotController.js');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createUserSnapshot);
router.route('/mysnapshots').get(protect, getUserSnapshots);

module.exports = router;
