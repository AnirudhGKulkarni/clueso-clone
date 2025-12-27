require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(cors({
	origin: function (origin, callback) {
		const allowed = [
			'http://localhost:5173',
			'http://192.168.29.92:8080',		
		];
		// allow requests with no origin (e.g., curl, mobile apps)
		if (!origin) return callback(null, true);
		if (allowed.indexOf(origin) !== -1) {
			return callback(null, true);
		}
		return callback(new Error('CORS policy: origin not allowed'));
	},
	credentials: true,
}));
app.use(express.json());

// Lightweight logging for auth routes to improve visibility during registration/login debugging
app.use((req, res, next) => {
	try {
		if (req.path && req.path.startsWith('/api/auth')) {
			console.log(`[AUTH] ${req.method} ${req.originalUrl} - body:`, req.body);
		}
	} catch (e) {
		// ignore logging errors
	}
	next();
});

app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/clueso';

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => {
		console.error('MongoDB connection error:', err.message || err);
		process.exit(1);
	});

app.get('/health', (req, res) => {
	res.json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now() });
});

app.get('/', (req, res) => res.send('Server is running'));

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
