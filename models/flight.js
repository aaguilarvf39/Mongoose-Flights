const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);