
function checkUser(req, res, next) {
    const users = require('../data.json').users;
    console.log(req.body);
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);

    if (user) {
            req.user = user;
            next();
    }else {
        res.send('Username or password incorrect');
    }
}

module.exports = checkUser;