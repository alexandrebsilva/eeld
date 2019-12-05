const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const cors = require('cors')

//permite a requisição carregar JSON
app.use(express.json())
app.use(cors())

//ORM
//iniciarndo o DB
mongoose.connect('mongodb://localhost:27017/eeld', {useNewUrlParser:true, useUnifiedTopology: true })
requireDir('./src/models')

//const Product = mongoose.model('Product')

//rotas
app.use('/api', require('./src/routes'))


app.listen(3003)