const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    corredor: {
        type: String,
        required: true
    },
    estante: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Prateleira', esquema, 'prateleiras');