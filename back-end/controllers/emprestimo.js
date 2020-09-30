const Emprestimo = require('../models/Emprestimo');

const controller = {};

controller.novo = async (req, res) => {
    try{
        await Emprestimo.create(req.body);
        res.status(201).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro);
    }
}

controller.listar = async (req, res) => {
    try{
        let dados = await Emprestimo.find()
            .populate('estudante', 'nome email')
            .populate('bibliotecaria', 'nome')
            .populate('obra', 'titulo autor prateleira');
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
        let obj = await Emprestimo.findById(id);

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
        let ret = await Emprestimo.findByIdAndUpdate(id, req.body);
        
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
        let ret = await Emprestimo.findByIdAndDelete(id);

        if(ret) res.status(204).end();
        else res.status(404).end();
    }
    catch(erro){
        console.log(erro);
        res.status(500).send(erro); 
    }
}

module.exports = controller;