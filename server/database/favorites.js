const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//this one will be the as favorite cards, so the same Hotel info(schema) with an id  
const favoriteSchema = new Schema = ({
    id: Number,
    HotelId: {
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    }
},
    { timestamps: true }
);

let Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
