var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.post("/salvar", function(req, res) {
    historicoController.salvarReset(req, res);
});

router.post("/subtrair", function(req, res) {
    historicoController.subtrairReset(req, res);
});

router.get("/total/:fkPokemonShiny", function(req, res) {
    historicoController.buscarTotalResets(req, res);
});

module.exports = router;