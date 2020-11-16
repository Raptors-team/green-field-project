const express = require('express');
const bodyParser = require('body-parser');
const { User } = require("./database/user")
const db = require('./database/index')
const cors = require("cors")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const saltRounds = 10;


// app.post('/signup', (req, res) => {
//   console.log(req.body)
//   bcrypt.hash(req.body.password, 10, (err, hash) => {
//     console.log(hash)
//     let user = new User({
//       username: req.body.username,
//       password: hash,
//       email: req.body.email
//     })
//     user.save((err, user) => {
//       console.log(user)
//       if (err){
//         console.log(err)
//         return res.status(404).json({ succcess: false })
//       } 
//       jwt.sign({ _id: user._id },'secret', (err, token) => {
//         console.log(token)
//         if (err) return res.status(404).json({ succcess: feild })
//         res.json(token)
//       });

//     })
//   });

// })


app.post('/signup', (req, res) => {
  console.log(req.body)
  bcrypt.hash(req.body.password, 10).then((hash) => {
    console.log(hash)
    let user = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email
    })
    user.save()
      .then((user) => {
      return jwt.sign({ _id: user._id }, 'secret')
      })
      .then((token) => {
        res.json(token)
      }).catch((err) => {
        res.status(404).json({ succcess: feild })
      })
  })
})


app.post('/signin', async (req, res) => {
  console.log(req.body)
  const user1 = await User.findOne({ email: req.body.email })//its take the data for all from user
  bcrypt.compare(req.body.password, user1.password)
  .then((result) => {
    if (result) {
       return jwt.sign({ _id: user1._id }, 'secret')}})
       .then((token)=>{
         console.log(token)
         res.json(token)
       }).catch((err)=>{
         res.status(404).json({success:feild})
       })
      
  
})





// localhost:5000/login
// localhost:5000/signup
// localhost:5000/payment

// app.use('/', router);

let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
