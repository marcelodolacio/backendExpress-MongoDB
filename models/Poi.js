const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Poi = mongoose.model('Poi',{
    ponto: String,
    raio:Number,
    latitude:Number,
    longitude:Number
})

module.exports = Poi