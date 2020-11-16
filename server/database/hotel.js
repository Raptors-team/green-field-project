const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let hotelSchema = new Schema({
    id: Number,
    name: String,
    // longitude: Float32Array,
    // latitude: Float32Array,
    distId: Number,

},
    { timestamps: true });

let Hotel = mongoose.model('Hotel', roomSchema);
module.exports = Hotel;
