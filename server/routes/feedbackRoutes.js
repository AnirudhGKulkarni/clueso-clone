const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { addFeedback, getFeedbacks } = require('../controllers/feedbackController');

// Create feedback (protected)
router.post('/', auth, addFeedback);

// Get feedbacks for logged-in user (protected)
router.get('/', auth, getFeedbacks);

module.exports = router;
