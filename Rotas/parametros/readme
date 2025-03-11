Introdução

Este é um resumo sobre como criar um servidor utilizando Node.js e Express.js. O foco é na criação de rotas, uso de parâmetros e envio de respostas.

Configurando o Servidor Express

Primeiro, importamos o Express e inicializamos o aplicativo:

const express = require('express');
const app = express();

Criando Rotas

1. Criando uma Rota Simples

app.get("/rota", function(req, res){
    res.send("voce criou uma rota");
});

Essa rota responde com o texto "voce criou uma rota" ao acessar http://localhost:2030/rota.

2. Criando uma Rota com Parâmetro

app.get("/par/:nome", function(req, res){
    res.send("voce criou um parametro");
});

Aqui, :nome é um parâmetro dinâmico da URL.

Acessando http://localhost:2030/par/Joao, a resposta será "voce criou um parametro".

3. Exibindo Parâmetro na Resposta

app.get("/t/:nome", function(req, res){
    res.send("<h1> ola " + req.params.nome + "</h1>");
});

O req.params.nome captura o valor passado na URL.

Se acessar http://localhost:2030/t/Ana, a resposta será:

<h1> ola Ana </h1>

Obs: O método res.send() pode ser usado apenas uma vez por resposta.

Iniciando o Servidor

app.listen(2030, function(){
    console.log("servidor rodando");
});

O servidor escuta na porta 2030.

Para rodar, use o comando:

node par.js

Conclusão

Este resumo cobre o básico sobre:

Criar um servidor com Express

Criar rotas

Trabalhar com parâmetros na URL

Enviar respostas com res.send()