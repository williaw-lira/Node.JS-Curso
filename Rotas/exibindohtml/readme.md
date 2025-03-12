Projeto Express Server Simples
Este projeto é uma aplicação simples utilizando Node.js e o framework Express. A aplicação cria um servidor que escuta na porta 121 e define uma rota /tictoc para enviar um arquivo HTML para o cliente.

Pré-requisitos
Node.js instalado.
Pacote Express instalado.
Para instalar o Express, execute:


npm install express
Estrutura do Projeto
index.html: Arquivo HTML que será enviado ao acessar a rota /tictoc.
server.js (ou outro nome de sua preferência): Arquivo que contém o código do servidor.
Código
O código principal da aplicação é o seguinte:


const express = require('express');
const app = express();

app.get("/tictoc", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(121, function() {
    console.log("server rodando em http://localhost:121");
});
Explicação
Importação do Express:
A aplicação importa o Express e cria uma instância do mesmo.

Definição da Rota /tictoc:
Ao acessar a rota /tictoc, o servidor envia o arquivo index.html que deve estar na mesma pasta do arquivo do servidor.

Inicialização do Servidor:
O servidor escuta na porta 121 e, ao iniciar, exibe uma mensagem informando que o servidor está rodando.

Como Executar
Certifique-se de ter o Node.js instalado.
Instale as dependências:

npm install
Execute o servidor:

node server.js
Abra seu navegador e acesse:

http://localhost:121/tictoc
Você deverá ver o conteúdo do arquivo index.html.
Considerações Finais
Este projeto serve como uma introdução ao uso do Express para criar servidores HTTP simples. Ele pode ser expandido para incluir outras rotas, middleware e funcionalidades adicionais conforme a necessidade.

