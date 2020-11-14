const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/gfp'
mongoose.connect(dbURI, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('connected') })
