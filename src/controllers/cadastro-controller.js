'use strict';

const mongoose = require('mongoose');
const Pessoa = mongoose.model('Pessoa');

exports.get = (req, res, next) => {
    Pessoa.find({}).then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);

    });
}

exports.getById = (req, res, next) => {
    Pessoa.findById(req.params.id).then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send(e);

    });
}

exports.post = (req, res, next) => {
    var cadastro = new Pessoa(req.body);
    cadastro.save().then(x => {
        res.status(201).send({ message: 'Produto cadastrado' });
    }).catch(e => {
        res.status(400).send({
            message: 'Falha',
            data: e
        });

    });

};



exports.put = (req, res, nex) => {
    Pessoa
        .findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                idade: req.body.idade,
                telefone: req.body.telefone,
                email: req.body.email
            }

        }).then(x => {
            res.status(201).send({
                message: 'Pessoa atualizado !'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar',
                data: e
            });
        });
};

exports.delete = (req, res, nex) => {
    Pessoa
        .findOneAndRemove(req.params.id).then(x => {
            res.status(201).send({
                message: 'Produto removido !'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover',
                data: e
            });
        });
};