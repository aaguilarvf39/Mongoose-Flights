const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airline: {
        type: String,
        enum: ['Volaris', 'Delta', 'Southwest', 'Air Canada', 'United']
    },
    airport: {
        type: String,
        enum: ['MEX', 'NRT', 'YVR', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 999
    },
    arrivals: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Volaris', 'Delta', 'Southwest', 'Air Canada', 'United']
    },
    airport: {
        type: String,
        enum: ['MEX', 'NRT', 'YVR', 'LAX', 'SAN'],
        default: 'MEX'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 999
    },
    departs: {
        type: Date,
        default: Date.now() + 365*24*60*60000
    },
    destinations: [destinationSchema],
    
});

module.exports = mongoose.model('Flight', flightSchema);