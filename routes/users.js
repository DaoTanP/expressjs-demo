const express = require('express');
const { generateAccessToken } = require('../middlewares/auth');
const checkUser = require('../middlewares/checkUser');
const router = express.Router();

router.post('/login', checkUser, (req, res) => {
    if (req.user) {
        // Generate an access token
        const accessToken = generateAccessToken(req.user.username);

        res.json({
            accessToken
        });
    } else {
        res.send('Can not process request');
    }
});

module.exports = router;