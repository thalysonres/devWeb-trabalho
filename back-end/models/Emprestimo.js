const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    
    data_emprestimo: {
        type: Date,
        required: true
    },
    data_devolucao: {
        type: Date,
        required: true,
        validate: {
            validator: function(valor) {
                return valor >= this.data_emprestimo
            },
            message: () => 'A data de devolução deve ser maior ou igual à data de empréstimo.' 
        }
    },
    estudante: {
        type: mongoose.ObjectId,
        ref: 'Estudante',
        required: true
    },
    bibliotecaria: {
        type: mongoose.ObjectId,
        ref: 'Bibliotecaria',
        required: true
    },
    obra: {
        type: mongoose.ObjectId,
        ref: 'Obra',
        required: true
    }
});

module.exports = mongoose.model('Emprestimo', esquema, 'emprestimos');