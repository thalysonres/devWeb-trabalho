const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    edicao: {
        type: String,
        required: false
    },
    ano_edicao: {
        type: String,
        required: false
    },
    num_paginas: {
        type: Number,
        required: true
    },
    num_copias: {
        type: Number,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    tema: {
        type: String,
        required: true
    },
    escritor: {
        type: mongoose.ObjectId,
        ref: 'Escritor',
        required: true
    },
    prateleira: {
        type: mongoose.ObjectId,
        ref: 'Prateleira',
        required: true
    }
});

module.exports = mongoose.model('Obra', esquema, 'obras');