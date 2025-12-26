/**
 * Generate a simple keyword-based summary from an array of feedback objects.
 * Each feedback object is expected to have at least: { message: String, source?: String, createdAt?: Date }
 * Returns total count, counts by source, top keywords, and a few recent examples.
 */
function summarizeFeedback(feedbacks, opts = {}) {
	const topN = opts.topN || 5;
	const stopwords = new Set([
		'the','and','for','with','that','this','have','you','are','was','but','not','from','they','their','your','its','has','what','when','where','how','why','all','any','just','get','like','also'
	]);

	const summary = {
		total: 0,
		bySource: {},
		topKeywords: [],
		recentExamples: [],
	};

	if (!Array.isArray(feedbacks) || feedbacks.length === 0) return summary;

	summary.total = feedbacks.length;

	const wordCounts = Object.create(null);

	feedbacks.forEach((f) => {
		const src = (f.source || 'web').toString();
		summary.bySource[src] = (summary.bySource[src] || 0) + 1;

		const text = (f.message || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
		const tokens = text.split(/\s+/).filter(Boolean);
		tokens.forEach((t) => {
			if (t.length <= 2) return;
			if (stopwords.has(t)) return;
			wordCounts[t] = (wordCounts[t] || 0) + 1;
		});
	});

	const keywords = Object.entries(wordCounts).sort((a,b) => b[1] - a[1]);
	summary.topKeywords = keywords.slice(0, topN).map(([word,count]) => ({ word, count }));

	// recent examples: sort by createdAt if available, otherwise keep original order
	const withDate = feedbacks.slice().sort((a,b) => {
		const ta = a.createdAt ? new Date(a.createdAt).getTime() : 0;
		const tb = b.createdAt ? new Date(b.createdAt).getTime() : 0;
		return tb - ta;
	});
	summary.recentExamples = withDate.slice(0, 3).map(f => ({ id: f._id || null, message: f.message, source: f.source, createdAt: f.createdAt }));

	return summary;
}

module.exports = { summarizeFeedback };
