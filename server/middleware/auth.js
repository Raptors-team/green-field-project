const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {
    const token = req.header['jwt-auth']

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

//check current user
const checkUser = (req, res, next) => {
    //ask about this one
    const token = req.header['jwt-auth']
    if (token) {
        jwt.verify(token, 'team 6 secret workk', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next()
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };