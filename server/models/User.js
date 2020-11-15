const { User } = require("../database/User")
const { login } = require("../database/User")

module.exports = {
    signupP: async (req, callback) => {
        const { name, email, password } = req.body
        try {
            const user = await User.create({ username: name, password, email })
            console.log(user)
            user.save(err => {
                if (err) {
                    console.log('created but not saved')
                    callback(err, null)
                }
                else {
                    console.log('saver')
                    callback(null, user)
                }
            })
        }
        catch (err) {
            console.log('not created   ', err)
            callback(err, null)
        }
    },
    loginP: async (req, callback) => {
        const { email, password } = req.body;
        try {
            const user = await login(email, password);
            callback(null, user)
        }
        catch (err) {
            callback(err, null)
        }
    }
}