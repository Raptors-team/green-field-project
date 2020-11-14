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
    console.log('--------------------------------------------------------------------------------------------------')
    console.log('0')
    console.log(err.message, err.code)
    console.log(Object.keys(err))

    console.log(err.message)
    console.log('--------------------------------------------------------------------------------------------------')
    console.log('1')
    console.log(err)
    console.log('--------------------------------------------------------------------------------------------------')
    console.log(2)
    console.log(err.keyValue)
    console.log('--------------------------------------------------------------------------------------------------')
    const errors = { username: '', email: '', password: '' }

    if (err.code === 11000) {
        console.log("**********************************")
        var rep = Object.keys(err.keyValue)[0]
        console.log(Object.keys(err.keyValue))
        console.log(Object.keys(err.keyValue)[0])
        console.log("**********************************")
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
module.exports = {
    signup_get: (req, res) => { res.send('signup get'); },
    login_get: (req, res) => { res.send('login get'); },
    signup_post: (req, res) => {
        //
        console.log('HERE SIGNUP POST')
        console.log(req.body)
        models.signupP(req, (err, data) => {
            if (err) {
                console.log('signup-post-controller-1 ERROR')
                console.log('error is: ', err)
                const errors = handleErrors(err)
                res.status(400).send(errors)
            }
            else {
                res.cookie('newUser', true, { httpOnly: true }) //1
                res.cookie('cookie123', true, { maxAge: 1000 * 60 * 60 * 24 }) //2 //secure:true
                console.log('signup-post-controller-1 Worked')

                const token = createToken(data._id);
                res.cookie('jwt', token)//, { httpOnly: true, maxAge: maxAge * 1000 }

                res.status(201).json(data)
            }
        })
    },
    login_post: (req, res) => { res.send('user login post'); }
}


 //dextructuring recieved body:
// const { email, password } = req.body

//mongoose-hook: special function which fires after certain mongoose event happen ,ex: delete from db