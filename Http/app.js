const { write } = require('fs');
var http = require ('http');

http.createServer(function(req,res){
    res.end("olá mundo")
}).listen(8081);
console.log("o servidor está rodando")

