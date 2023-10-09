const express = require('express');
const { generateAccessToken } = require('../middlewares/auth');
const router = express.Router();

router.post('/login', (req, res) => {
    const users = require('../data.json').users;
    user = users.find(u => u.username === req.body.username && u.password === req.body.password);

    if (user) {
        // Generate an access token
        const accessToken = generateAccessToken(user.username);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
});

module.exports = router;