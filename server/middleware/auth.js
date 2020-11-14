const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {
    const token = req.cookies['jwt-auth']

    //jwt exists?
    if (token) {
        jwt.verify(token, 'team 6 secret workk', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.send(err.message)
            }
            else {
                res.send(decodedToken)
                next();
            }
        })
    }
    else {
        res.send('no token!')
    }
}

module.exports = { requireAuth };