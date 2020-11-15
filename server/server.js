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

app.use(cors())
app.use(authRoutes)

let port = 5000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});


