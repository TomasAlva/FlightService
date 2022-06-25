const { application } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    flightNum: {type: String, required: true},
    departureDate: {type: Date, required: true},
    arrivalDate: {type: Date, required: true},
    departureTime: {type: String, required: true},
    arrivalTime: {type: String, required: true},
    departureAirport: {type: String, required: true},
    arrivalAirport: {type: String, required: true},
    flightPassangerMin: {
        type: Number,
        min: [0, 'Flight cannot have less than 0 people!'],
        max: [600, 'Flight cannot have more than 600 people!'] 
    },    
    flightPassangerMax: {
        type: Number,
        min: [0, 'Flight cannot have less than 0 people!'],
        max: [600, 'Flight cannot have more than 600 people!'] 
    },
    flightPassangerCurrent: {
        type: Number,
        min: [0, 'Flight cannot have less than 0 people!'],
        max: [600, 'Flight cannot have more than 600 people!']   
    },

});

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;