const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    pais_origem: {
        type: String,
        required: false
    },
    genero: {
        type: String,
        required: false
    },
    resumo: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Autor', esquema, 'autores');