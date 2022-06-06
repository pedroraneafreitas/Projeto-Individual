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

function postNovo(post){
    instrucaoSql =`select * from public where id = ${post};`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);


}

function gostei(post){
    instrucaoSql = `update public set gostei = gostei + 1 where id = ${post} `
}



module.exports = {
    instrucao,
    postNovo,
    gostei
    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal
}