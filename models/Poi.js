const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

//RESPONSAVEL PELA TIPAGEM DOS DADOS REQUISICAO DE POI'S
const Poi = mongoose.model('Poi',{
    ponto: String,
    raio:Number,
    latitude:Number,
    longitude:Number
})

module.exports = Poi