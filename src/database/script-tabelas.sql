-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE shiny_hunt;
USE shiny_hunt;

CREATE TABLE pokemon_favorito (
  idpokemon_favorito INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  tipo1 VARCHAR(45) NULL,
  tipo2 VARCHAR(45) NULL,
  PRIMARY KEY(idpokemon_favorito)
);

CREATE TABLE usuario (
  idusuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  email VARCHAR(80) NULL,
  senha VARCHAR(45) NULL,
  fk_pokemon_favorito INT NOT NULL,
  PRIMARY KEY(idusuario),
  CONSTRAINT fk_usuario_pokemon_favorito
    FOREIGN KEY (fk_pokemon_favorito)
    REFERENCES pokemon_favorito(idpokemon_favorito)
);

CREATE TABLE pokemon_shiny (
  idpokemon_shiny INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NULL,
  geracao VARCHAR(45) NULL,
  metodo VARCHAR(45) NULL,
  status VARCHAR(45) DEFAULT 'ativa',
  fk_usuario INT NOT NULL,
  PRIMARY KEY(idpokemon_shiny),
  CONSTRAINT fk_pokemon_shiny_usuario
    FOREIGN KEY (fk_usuario)
    REFERENCES usuario(idusuario)
);

CREATE TABLE historico_de_resets (
  idhistorico_de_resets INT NOT NULL AUTO_INCREMENT,
  qtd_tentativas_total INT NULL,
  qtd_tentativas_dia INT NULL,
  data DATE NULL,
  fk_pokemon_shiny INT NOT NULL,
  PRIMARY KEY(idhistorico_de_resets),
  CONSTRAINT fk_historico_de_resets_pokemon_shiny
    FOREIGN KEY (fk_pokemon_shiny)
    REFERENCES pokemon_shiny(idpokemon_shiny),
  UNIQUE KEY unique_reset_dia (data, fk_pokemon_shiny)
);