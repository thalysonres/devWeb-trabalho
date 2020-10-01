const Estudante = require('../models/Estudante');

const controller = {};

controller.novo = async (req, res) => {
    try{
        await Estudante.create(req.body);
        res.status(201).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.listar = async (req, res) => {
    try{
        let dados = await Estudante.find()
            .populate('bibliotecaria', 'nome');
        res.send(dados);
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.obterUm = async (req, res) => {
    try{
        const id = req.params.id; // captura o id da URL
        let obj = await Estudante.findById(id);

        if (obj) res.send(obj);
        else res.status(404).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.atualizar = async (req, res) => {
    try{
        const id = req.body._id;
        let ret = await Estudante.findByIdAndUpdate(id, req.body);
        
        if(ret) res.status(204).end();
        else res.status(404).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro); 
    }
}

controller.excluir = async (req, res) => {
    try{
        const id = req.body._id;
        let ret = await Estudante.findByIdAndDelete(id);

        if(ret) res.status(204).end();
        else res.status(404).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro); 
    }
}

module.exports = controller;