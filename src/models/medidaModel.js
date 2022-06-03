// const { obterPost } = require("../controllers/medidaController");

var database = require("../database/config");

function instrucao(){
    instrucaoSql =`select * from public where id = 1;`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);


}

function postNovo(post){
    instrucaoSql =`select * from public where id = ${post};`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);


}





// function buscarUltimasMedidas(idAquario, limite_linhas) {
//     instrucaoSql = `select 
//                         temperatura, 
//                         umidade, 
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc limit ${limite_linhas}`;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {
//     instrucaoSql = `select 
//                         temperatura, 
//                         umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }
module.exports = {
    instrucao,
    postNovo
    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal
}