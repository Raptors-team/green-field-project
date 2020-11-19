const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const dbURI = 'mongodb+srv://asemOne:asem1234@cluster0.xqniz.mongodb.net/hotels?retryWrites=true&w=majority'
//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true, 'useFindAndModify': false })
mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));
