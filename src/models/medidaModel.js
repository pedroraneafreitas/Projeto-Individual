// const { obterPost } = require("../controllers/medidaController");

var database = require("../database/config");

function instrucao() {
    instrucaoSql = `select * from public where id = 1;`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);


}

function postNovo(post) {
    instrucaoSql = `select * from public where id = ${post};`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);


}

function postNovo(post) {
    instrucaoSql = `select * from public where id = ${post};`
    console.log("executando SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);

}

function gostei(post) {
    instrucaoSql = `update public set gostei = gostei + 1 where id = ${post}; `
    console.log('executando no database')
    return database.executar(instrucaoSql);
}

function report(post) {
    instrucaoSql = `update public set report = report + 1 where id = ${post}; `
    console.log('executando no database')
    return database.executar(instrucaoSql);
}


function reportado() {
    instrucaoSql = `select count(id) as publicacoes from public where report > 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuariosCadastrados(data) {
    instrucaoSql = `select count(email) as usuariosCadastrados from usuario where dtCadastro like '%${data}%';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastradosTotal() {
    instrucaoSql = `select count(email) as cadastrosHoje from usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    instrucao,
    postNovo,
    gostei,
    report,
    reportado,
    usuariosCadastrados,
    cadastradosTotal


}