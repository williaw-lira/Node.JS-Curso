const express = require ('express')
const app = express()

app.get('/pratica', function (res, req){
    res.send("voce está praticando")
    
});

app.listen(2025, function(){
    console.log("servidor rodando url - http://localhost:2025/pratica")
})