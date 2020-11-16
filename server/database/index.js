const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const dbURI = 'mongodb+srv://ameed:test1234@green-feild.xwxax.mongodb.net/nameed?retryWrites=true&w=majority'
// const dbURI = 'mongodb://localhost/gfp'
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));