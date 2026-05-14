var express = require("express");
var router = express.Router();

var pokemonShinyController = require("../controllers/pokemonShinyController");

router.post("/criar", function(req, res) {
    pokemonShinyController.criar(req, res);
});

router.get("/ativas/:fkUsuario", function(req, res) {
    pokemonShinyController.buscarHuntsAtivas(req, res);
});

router.delete("/deletar/:idPokemonShiny", function(req, res) {
    pokemonShinyController.deletarHunt(req, res);
});

router.put("/editar/:idPokemonShiny", function(req, res) {
    pokemonShinyController.editarHunt(req, res);
});

module.exports = router;