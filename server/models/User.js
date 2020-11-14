const { User } = require("../database/User")


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


        //handle in controller the .send then do the save 

        // user.save()
        //     .then(() => {
        //         console.log('saved')
        //         callback(null, user)
        //     })
        //     .catch(() => {
        //         console.log('not saved')
        //         callback(err, null)
        //     })
    }
    //  loginP: 
}