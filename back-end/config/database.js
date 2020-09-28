const mongoose = require('mongoose');

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', ()=>
        console.log('==>Mongoose! Conectado com sucesso ao servidor')
    );

    mongoose.connection.on('disconnected', ()=>
        console.log('==>Mongoose! Desconectado do servidor')
    );

    process.on('SIGINT', ()=>
        mongoose.connection.close(()=> {
            console.log('* Mongoose! Desconectado pelo término da aplicação');
        process.exit(0);
        })
    );

}