const express = require('express');
const { authenticateToken } = require('../middlewares/auth');
const router = express.Router();

router.use(authenticateToken);

router.get('/', (req, res) => {
    res.json(require('../data.json').products);
});

router.get('/:id', (req, res) => {
    const data = require('../data.json').products;
    const result = data.find(d => d.id === Number.parseInt(req.params.id));
    res.json(result || null);
});

module.exports = router;