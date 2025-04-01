const Scan = require('../models/Scan');

exports.scanProduct = async (req, res) => {
    try {
        const { productName, ingredients, riskLevel } = req.body;
        const scan = new Scan({ userId: req.user.id, productName, ingredients, riskLevel });
        await scan.save();
        res.json({ message: 'Scan saved', scan });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
