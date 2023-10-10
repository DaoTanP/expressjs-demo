const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// generate server token
// const token = require('crypto').randomBytes(64).toString('hex');
// console.log(token);

// get config vars
dotenv.config();

// expires in 30s
function generateAccessToken(username) {
    return jwt.sign({ username: username }, process.env.SERVER_TOKEN, { expiresIn: 30 });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // 401: invalid csrf token
    if (token == null)
        return res.sendStatus(401);

    jwt.verify(token, process.env.SERVER_TOKEN, (err, user) => {

        if (err) {
            console.log(err);
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
}

module.exports = { generateAccessToken, authenticateToken }