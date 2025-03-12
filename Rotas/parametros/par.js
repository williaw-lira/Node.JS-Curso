const express = require ('express')
const app = express ()

app.get("/rota", function(req,res){
    res.send("voce criou uma rota")
})

app.get("/par", function(req,res){
    res.send("voce criou um parametro")

})

app.get("/t/:nome", function(req,res){
    // aqui por exemplo eu posso ir no chrome e digitar
    // t/william e sera escrito o nome william pois o parametro recebe esse nome 
    res.send("<h1> ola"+ " " +req.params.nome + "</h1>" )
// SO E POSSIVEL ENVIAR UM SEND UMA UNICA VEZ
})


app.listen(2050, function(){
    console.log("servidor rodando")
})