const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FlightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});