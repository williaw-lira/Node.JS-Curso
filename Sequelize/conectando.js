// conectando a tabela test de mysql
const Sequelize = require ('sequelize');
const sequelize = new Sequelize ('test','root','senha...',{
    host :'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso");
}).catch(function(erro){
    console.log("falha ao se conectar: "+erro)
})