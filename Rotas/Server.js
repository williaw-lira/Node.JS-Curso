

const express = require('express')
// aqui usamos o require para chamar um modulo já existente o express

const app = express();
// aqui estamos passando todas os modulos do express para app 


console.log("Backend rodando")



//rota pricipal e sepre "/"
app.get("/", function(res, req){ 
    res.send(" Server online ");
        // o res.send - e utilizado para enviar mensagens na tela 
        
});

// vamos criar varias rotas com caminhos
app.get("/contato", function(res, req){
    // repare que eu adicione um "/contato" quando o / está sozinho ele não tem caminho mas quando tem 
     // /algumacoisa ai vc esta adicionando uma nova pagina ou caminho para o sever 
    res.send("contato")
    res.end(" contato tst")
})

app.get("/produtos", function(res, req){
    res.send("produtos disponiveis :")

})


    //agora vamos abrir um servidor com o express mas sempre deve ser a ultima linha do codigo
app.listen(10110, function(){
    console.log("servidor rodando na url http://localhost:10110")
})
//diferente do http com o express fica mais simples apenas passamos uma port para o app 
//e não precisamos criar o server ele já traz automaticamente     