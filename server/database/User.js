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
    reservations: []
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
    //this refers to user model
    const user = await User.findOne({ email });
    console.log(user)
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

module.exports.User = User;
module.exports.login = login;




