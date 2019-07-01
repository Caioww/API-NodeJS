const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Conecta ao banco
mongoose.connect('mongodb+srv://balta:caio1234@cluster0-l3ma2.mongodb.net/test?retryWrites=true&w=majority');

//Models
const Pessoa = require('./models/cadastro');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Carrega rotas
const index = require('./routes/index');
const routers = require('./routes/cadastro');


app.use('/', index);
app.use('/lista', routers);


module.exports = app;