const models = require('../models/User')
const jwt = require('jsonwebtoken')

//const cookieParser = require('cookie-parser')



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
    signup_get: (req, res) => {

    },
    login_get: (req, res) => { res.send('login get'); },
    signup_post: (req, res) => {
        console.log('HERE SIGNUP POST')
        models.signupP(req, (err, data) => {
            if (err) {
                console.log('signup-post-controller-1 ERROR')
                console.log('error is: ', err)
                const errors = handleErrors(err)
                res.status(400).send(errors)
            }
            else {
                //res.setHeader('Set-cookie', 'newUser=true');
                // res.cookie('newUser', true, { httpOnly: true }) //1
                //res.cookie('cookie123', true, { maxAge: 1000 * 60 * 60 * 24 }) //2 //secure:true
                console.log('signup-post-controller-1 Worked')
                const token = createToken(data._id);
                console.log(token)
                //res.cookie('jwt', token)//, { httpOnly: true, maxAge: maxAge * 1000 }
                // res.cookie('showUp', 'res.cookie work')

                res.header('jwt-auth', token).json({ token: token });
                // console.log({ user: data._id })
                // res.status(201).json({ user: data._id, token: token })
            }
        })
    },
    login_post: (req, res) => {

        models.loginP(req, (err, data) => {
            if (err) {
                const errors = handleErrors(err)
                res.status(400).json({ errors })
            }
            else {
                res.status(200).json({ user: data._id })
            }
        })
    }
}


 //dextructuring recieved body:
// const { email, password } = req.body

//mongoose-hook: special function which fires after certain mongoose event happen ,ex: delete from db