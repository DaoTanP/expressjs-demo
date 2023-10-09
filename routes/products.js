const express = require('express');
const { authenticateToken } = require('../middlewares/auth');
const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.json(require('../data.json').products);
});

router.get('/:id', authenticateToken, (req, res) => {
    const data = require('../data.json').products;
    const result = data.find(d => d.id === Number.parseInt(req.params.id));
    res.json(result || null);
});

module.exports = router;