const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret_for_production';

async function register(req, res) {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) return res.status(400).json({ message: 'Name, email and password are required' });

		const existing = await User.findOne({ email });
		if (existing) return res.status(409).json({ message: 'Email already in use' });

		const user = new User({ name, email, password });
		await user.save();

		const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

		return res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
	} catch (err) {
		console.error('Register error:', err.message || err);
		return res.status(500).json({ message: 'Server error' });
	}
}

async function login(req, res) {
	try {
		const { email, password } = req.body;
		if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

		const user = await User.findOne({ email });
		if (!user) return res.status(401).json({ message: 'Invalid credentials' });

		const isMatch = await user.comparePassword(password);
		if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

		const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

		return res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
	} catch (err) {
		console.error('Login error:', err.message || err);
		return res.status(500).json({ message: 'Server error' });
	}
}

module.exports = { register, login };
