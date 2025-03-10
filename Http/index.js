var http = require ('http');

http.createServer(function(req,res){
    res.end('<h1> HELLO WORLD </h1>')
}).listen(5020)

console.log('está rodando o backend')