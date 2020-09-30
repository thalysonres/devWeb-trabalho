const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        index: { unique: true }
    },
    data_nascimento: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Bibliotecaria', esquema, 'bibliotecarias');