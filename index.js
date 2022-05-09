// config inicial
const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')
const Poi = require('./models/Poi')


app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  

app.use(cors()) //Essa linha aqui


app.use(express.json())

app.get('/poi', async (req, res) => {
    try {
      const people = await Poi.find()
  
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

mongoose.connect('mongodb+srv://marcelodolacio:UaRPlbG1iYxZ2xEd@cluster0.6ufeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log('Deu certo a conexao com o DB!')
    app.listen(3000);
})
.catch((error)=> console.log(error))



