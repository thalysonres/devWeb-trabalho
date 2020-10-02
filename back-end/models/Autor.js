const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    pais_origem: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    resumo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Autor', esquema, 'autores');