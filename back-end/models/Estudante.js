const mongoose = require('mongoose')

const esquema = mongoose.Schema ({
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
	senha: {
		type: String,
		required: true
	},
	email: {
		type: String,
        required: true,
        index: { unique: true }        
    },
    data_nascimento: {
		type: Date,
		required: true
	},
    data_cadastro: {
		type: Date,
        required: true,
        validate: {
            validator: function(valor) {
                return valor > this.data_nascimento
            },
            message: () => 'A data de cadastro deve ser maior que a data de nascimento.' 
        }
    },
    bibliotecaria: {
        type: mongoose.ObjectId,
        ref: 'Bibliotecaria',
        required: true
    }
})

module.exports = mongoose.model( 'Estudante', esquema, 'estudantes' )