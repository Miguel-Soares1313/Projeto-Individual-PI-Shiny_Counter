var database = require("../database/config");

function criar(nome, geracao, metodo, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO pokemon_shiny (nome, geracao, metodo, status, fk_usuario) 
        VALUES ('${nome}', '${geracao}', '${metodo}', 'ativa', '${fkUsuario}');
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHuntsAtivas(fkUsuario) {
    var instrucaoSql = `
        SELECT idpokemon_shiny, nome, geracao, metodo
        FROM pokemon_shiny
        WHERE fk_usuario = ${fkUsuario} AND status = 'ativa';
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarHunt(idPokemonShiny) {
    var instrucaoSql1 = `
        DELETE FROM historico_de_resets WHERE fk_pokemon_shiny = ${idPokemonShiny};
    `;
    var instrucaoSql2 = `
        DELETE FROM pokemon_shiny WHERE idpokemon_shiny = ${idPokemonShiny};
    `;
    
    return database.executar(instrucaoSql1)
        .then(function() {
            return database.executar(instrucaoSql2);
        });
}

function editarHunt(idPokemonShiny, nome, geracao, metodo) {
    var instrucaoSql = `
        UPDATE pokemon_shiny 
        SET nome = '${nome}', geracao = '${geracao}', metodo = '${metodo}'
        WHERE idpokemon_shiny = ${idPokemonShiny};
    `;
    console.log("Executando SQL: " + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    criar,
    buscarHuntsAtivas,
    deletarHunt,
    editarHunt
};