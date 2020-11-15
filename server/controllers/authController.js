const models = require('../models/User')
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60 //seconds ; unlike cookies(miliseconds)
const createToken = (id) => {
    //payload - secret -> signature
    return jwt.sign({ id }, 'team 6 secret workk', {
        expiresIn: maxAge
    })
}
//error handler; msg to client console
const handleErrors = (err) => {
    //need to handle the duplication of value 
    //console.log(Object.keys(err)) console.log(err.message)console.log(err.keyValue) console.log(err.message, err.code)
    const errors = { username: '', email: '', password: '' }

    //incorrect email
    if (err.message === 'unregistered email') {
        errors.email = 'this email is not registered';
    }

    //incorrect email
    if (err.message === 'incorrect password') {
        errors.password = 'this password is incorrect';
    }
    //duplicate
    if (err.code === 11000) {
        // console.log(Object.keys(err.keyValue))   console.log(Object.keys(err.keyValue)[0])
        if (Object.keys(err.keyValue)[0] === 'email') {
            errors.email = 'this email is already registered';
        }
        else if (Object.keys(err.keyValue)[0] === 'username') {
            errors.username = 'this username is already registered';
        }

    }

    //validation error
    if (err.message.includes('user validation failed')) {
        console.log('--------------------------------------------------------------------------------------------------')
        console.log(Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        }))
        //console.log(Object.values(err))
    }
    return errors;
}

//signup_get cookies is working 
module.exports = {
    signup_post: (req, res) => {
        models.signupP(req, (err, data) => {
            if (err) {
                console.log('signup-post-controller-1 ERROR')
                console.log('error is: ', err)
                const errors = handleErrors(err)
                res.status(400).send(errors)
            }
            else {
                console.log('signup-post-controller-1 Worked')
                const token = createToken(data._id);
                console.log(token)
                res.header('jwt-auth', token).json({ token: token });
            }
        })
    },
    login_post: (req, res) => {

        models.loginP(req, (err, data) => {
            if (err) {
                console.log('login-post-controller-1 ERROR')
                const errors = handleErrors(err)
                res.status(400).json({ errors })
            }
            else {
                console.log('login-post-controller-1 worked')
                const token = createToken(data._id);
                res.header('jwt-auth', token)
                res.status(200).json({ user: data._id })
            }
        })
    },
    logout_get: (req, res) => {
        console.log('logout-get-controller-1')
        res.header('jwt-auth', '', { maxAge: 1 }).send('jwt killed')
    }
}


 //dextructuring recieved body:
// const { email, password } = req.body

//mongoose-hook: special function which fires after certain mongoose event happen ,ex: delete from db