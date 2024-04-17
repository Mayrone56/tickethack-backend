const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    departure: String;
    arrival: String;
    date: Date;
    price: Number;
})


const Trip = mongoose.model('trips', tripSchema);

//Export du modele
module.exports = Trip;