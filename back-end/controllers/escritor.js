const Escritor = require('../models/Escritor');

const controller = {};

controller.novo = async (req, res) => {
    try{
        await Escritor.create(req.body);
        res.status(201).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.listar = async (req, res) => {
    try{
        let dados = await Escritor.find();
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
        let obj = await Escritor.findById(id);

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
        let ret = await Escritor.findByIdAndUpdate(id, req.body);
        
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
        let ret = await Escritor.findByIdAndDelete(id);

        if(ret) res.status(204).end();
        else res.status(404).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro); 
    }
}
module.exports = controller;