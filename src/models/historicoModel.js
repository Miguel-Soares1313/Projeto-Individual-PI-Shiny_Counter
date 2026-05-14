var database = require("../database/config");

function salvarReset(fkPokemonShiny) {
    var hoje = new Date().toISOString().split('T')[0];

    var instrucaoSql = `
        INSERT INTO historico_de_resets (qtd_tentativas_dia, qtd_tentativas_total, data, fk_pokemon_shiny)
        VALUES (1, 1, '${hoje}', ${fkPokemonShiny})
        ON DUPLICATE KEY UPDATE 
            qtd_tentativas_dia = qtd_tentativas_dia + 1,
            qtd_tentativas_total = qtd_tentativas_total + 1;
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function subtrairReset(fkPokemonShiny) {
    var hoje = new Date().toISOString().split('T')[0]; 

    var instrucaoSql = `
        UPDATE historico_de_resets 
        SET qtd_tentativas_dia = GREATEST(qtd_tentativas_dia - 1, 0),
            qtd_tentativas_total = GREATEST(qtd_tentativas_total - 1, 0)
        WHERE data = '${hoje}' AND fk_pokemon_shiny = ${fkPokemonShiny};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotalResets(fkPokemonShiny) {
    var instrucaoSql = `
        SELECT SUM(qtd_tentativas_total) as total
        FROM historico_de_resets
        WHERE fk_pokemon_shiny = ${fkPokemonShiny};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    salvarReset,
    subtrairReset,
    buscarTotalResets
};