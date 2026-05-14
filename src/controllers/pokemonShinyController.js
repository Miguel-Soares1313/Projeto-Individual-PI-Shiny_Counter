var pokemonShinyModel = require("../models/pokemonShinyModel");

function criar(req, res) {
    var nome = req.body.nomeServer;
    var geracao = req.body.geracaoServer;
    var metodo = req.body.metodoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (nome == undefined) {
        res.status(400).send("Nome do pokémon está undefined!");
    } else if (geracao == undefined) {
        res.status(400).send("Geração está undefined!");
    } else if (metodo == undefined) {
        res.status(400).send("Método está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Usuário está undefined!");
    } else {
        pokemonShinyModel.criar(nome, geracao, metodo, fkUsuario)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarHuntsAtivas(req, res) {
    var fkUsuario = req.params.fkUsuario;

    pokemonShinyModel.buscarHuntsAtivas(fkUsuario)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
function deletarHunt(req, res) {
    var idPokemonShiny = req.params.idPokemonShiny;

    pokemonShinyModel.deletarHunt(idPokemonShiny)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function editarHunt(req, res) {
    var idPokemonShiny = req.params.idPokemonShiny;
    var nome = req.body.nomeServer;
    var geracao = req.body.geracaoServer;
    var metodo = req.body.metodoServer;

    pokemonShinyModel.editarHunt(idPokemonShiny, nome, geracao, metodo)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    criar,
    buscarHuntsAtivas,
    deletarHunt,
    editarHunt
};


