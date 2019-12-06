const express = require('express');
const app = express();
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const cors = require('cors')

//permite a requisição carregar JSON
app.use(express.json())

//necessario para enviar dados via json 
app.use(cors())

//cluster de mongo em cloud.mongo.com
mongoose.connect('mongodb+srv://root:root@eeldcluster-uaf0s.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
requireDir('./src/models')


//rotas
app.use('/api', require('./src/routes'))


app.listen(3003)