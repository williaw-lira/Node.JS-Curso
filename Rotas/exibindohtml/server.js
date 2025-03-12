
const express = require ('express')
const app = express ()


app.get("/tictoc", function(req, res){
    res.sendFile(__dirname + "/index.html")
})




app.listen(121, function(){
    console.log("server rodando em http://localhost:121")

})