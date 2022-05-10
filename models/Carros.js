const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

//RESPONSAVEL PELA TIPAGEM DOS DADOS REQUISICAO DE CARROS
const Carros = mongoose.model('Carros',{
    placa: String,
    data_posicao: String,
    velocidade: Number,
    longitude: Number,
    latitude: Number,
    ignicao: Boolean
})

module.exports = Carros