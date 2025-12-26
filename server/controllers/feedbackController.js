const Feedback = require('../models/Feedback');

async function addFeedback(req, res) {
	try {
		const { message, source } = req.body;
		if (!message) return res.status(400).json({ message: 'Message is required' });

		const feedback = new Feedback({
			user: req.user._id,
			message,
			source: source || 'web',
		});

		await feedback.save();
		return res.status(201).json({ feedback });
	} catch (err) {
		console.error('Add feedback error:', err.message || err);
		return res.status(500).json({ message: 'Server error' });
	}
}

async function getFeedbacks(req, res) {
	try {
		const feedbacks = await Feedback.find({ user: req.user._id }).sort({ createdAt: -1 });
		return res.json({ feedbacks });
	} catch (err) {
		console.error('Get feedbacks error:', err.message || err);
		return res.status(500).json({ message: 'Server error' });
	}
}

module.exports = { addFeedback, getFeedbacks };
