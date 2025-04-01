const express = require('express');
const { scanProduct } = require('../controllers/scanController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/scan', authMiddleware, scanProduct);

module.exports = router;
