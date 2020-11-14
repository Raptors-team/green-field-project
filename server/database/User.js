const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const user = require('../models/user');
const bcrypt = require('bcrypt');
/*
for isEmail: use validator library 
npm install mongoose validator
*/
let userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter your name']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter your email'],
        validate: [isEmail, 'Please enter a valid Email']
    },
},
    { timestamps: true });


// fire a function before doc is saved: not arrow(to use this)

userSchema.pre('save', async function (next) {
    //this: refer to user instance
    var user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// fire a function after saving to db:
userSchema.post('save', (doc, next) => {
    console.log('new user was created ', doc)

    next()
})




const User = mongoose.model('user', userSchema);//collection name must be: users

var login = async function (email, password) {
    console.log('auth ::::::::::::::::::::: ')
    console.log(email)
    console.log(password)
    //this refers to user model
    const user = await User.findOne({ email });
    if (user) {
        var auth = await bcrypt.compare(password, user.password);
        console.log(auth)
        if (auth) {
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('unregistered email')
}

// const email = 'dima.owens@gmail.com'
// const password = 'workkwork'
// const username = 'dimaOwens'
// var s = async () => {
//     const user = await User.create({ username, password, email })
//     user.save(err => {
//         if (err) { console.log('error not saved') }
//         else { console.log('saved') }
//     })
// }

// s();
// var user = new User({
//     username: 'dima',
//     email: 'dima@gmail.com',
//     password: 'delkjhhwd'
// })
// console.log(user)
// user.save(err => {
//     if (err) { console.log('error not saved') }
//     else { console.log('saved') }
// })
module.exports.User = User;
module.exports.login = login;