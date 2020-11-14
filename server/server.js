const express = require('express');
const bodyParser = require('body-parser');
const { User } = require("./database")
const cors = require("cors")
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
let app = express();

//middleware: 
app.use(express.json());
app.use(express.static('../client/public'))//ns
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
// app.post('/signup', (req, res) => {
//   console.log(req.body)
//   res.status(200).send('fine')
// })


const maxAge = 3 * 24 * 60 * 60 //seconds ; unlike cookies(miliseconds)
const createToken = (id) => {
  //payload - secret -> signature
  return jwt.sign({ id }, 'team 6 secret workk', {
    expiresIn: maxAge
  })

}


app.use(cors())
app.use(authRoutes)

//app.post('/signup',  )
/**Mongodb things */
// const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost/gfp'
// mongoose.connect(dbURI, { useNewUrlParser: true })
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', () => { console.log('connected') })
app.get('/signup', (req, res) => {
  res.cookie('cookieAAAA', true, { httpOnly: true }) //1
  res.cookie('cookieCCC', 'cookie cccc') //1
  res.cookie('cookieBBBB', true, { maxAge: 1000 * 60 * 60 * 24 }) //2 //secure:true
  console.log('signup-post-controller-1 Worked')
  const token = createToken('5faf23eba25f82427c278cb4');
  console.log('COOOOOKIE HERE:::::::::', token)
  res.cookie('jwt', token)//, { httpOnly: true, maxAge: maxAge * 1000 }
  res.status(201).send('DONE')

})


//app.use('/', router);
// app.get('/',(req, res)=>{
//   res.render('')
// })


let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});







/**********Cookies Info */
// app.get('/set-cookies', (req, res) => {
//   //res.setHeader('Set-cookie', 'newUser=true'); the newxt line is the same
//   res.cookie('newUser', false, { httpOnly: true })
//   //secure: only will be sent with https connection 
//   //httpOnly : can't be accessed from front-end  // only via http protocol
//   res.cookie('test', true, { maxAge: 1000 * 60 * 60 * 24, secure: true })

//   res.send('you got the cookies')
// })
// //jwt : header, payload(no sens-data), verify signature
// app.get('/read-cookies', (req, res) => {
//   console.log(req.cookies)
//   res.json(req.cookies.newUser)
// })