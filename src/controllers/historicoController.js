var historicoModel = require("../models/historicoModel");

function salvarReset(req, res) {
    var fkPokemonShiny = req.body.fkPokemonShinyServer;

    if (fkPokemonShiny == undefined) {
        res.status(400).send("Pokemon shiny está undefined!");
    } else {
        historicoModel.salvarReset(fkPokemonShiny)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function subtrairReset(req, res) {
    var fkPokemonShiny = req.body.fkPokemonShinyServer;

    if (fkPokemonShiny == undefined) {
        res.status(400).send("Pokemon shiny está undefined!");
    } else {
        historicoModel.subtrairReset(fkPokemonShiny)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarTotalResets(req, res) {
    var fkPokemonShiny = req.params.fkPokemonShiny;

    historicoModel.buscarTotalResets(fkPokemonShiny)
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarReset,
    subtrairReset,
    buscarTotalResets
};

