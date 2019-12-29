const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Conecta ao banco
mongoose.connect('mongodb+srv://caio:1234@cluster0-0lzsl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

//Models
const Pessoa = require('./models/cadastro');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});


const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Carrega rotas
const index = require('./routes/index');
const routers = require('./routes/cadastro');


app.use('/', index);
app.use('/lista', routers);


module.exports = app;