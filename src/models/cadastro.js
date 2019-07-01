'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    idade: {
        type: Number,
        required: true,
        trim: true
    },
    telefone:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }

});

module.exports = mongoose.model('Pessoa', schema);

