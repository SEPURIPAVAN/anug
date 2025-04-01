const mongoose = require('mongoose');

const ScanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    productName: String,
    ingredients: [String],
    riskLevel: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scan', ScanSchema);
