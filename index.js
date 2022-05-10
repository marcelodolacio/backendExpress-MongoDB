// config inicial
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
const Poi = require('./models/Poi')
const Carros = require('./models/Carros')

//RESNPOSAVEL POR FAZER A CONFIGURACAO INICIAL DO EXPRESS
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
app.use(cors()) 
app.use(express.json())

//RESPONSAVEL POR FAZER CHAMADA PRA RECUPERAR LISTA DE POI'S
app.get('/poi', async (req, res) => {
    try {
      const poi = await Poi.find()
  
      res.status(200).json(poi)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

//RESPONSAVEL POR FAZER CHAMADA PRA RECUPERAR CARROS
app.get('/carros', async (req, res) => {
  try {
    const carros = await Carros.find()

    res.status(200).json(carros)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

//RESPONSAVEL POR FAZER CONEXAO COM MONGODB
mongoose.connect('mongodb+srv://marcelodolacio:UaRPlbG1iYxZ2xEd@cluster0.6ufeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('Deu certo a conexao com o DB!')
    app.listen(3000);
})
.catch((error)=> console.log(error))



