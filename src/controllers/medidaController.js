var medidaModel = require("../models/medidaModel");

function instrucao(res) {
    medidaModel.instrucao()
        .then(
            function (resposta) {
                console.log(`\nResultados encontrados: ${resposta.length}`);
                console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                res.json(resposta)
            }
        )

}

function postNovo(req, res) {

    var post = req.body.numeroPostServer;
    medidaModel.postNovo(post)
        .then(
            function (resposta) {
                console.log(`\nResultados encontrados: ${resposta.length}`);
                console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                res.json(resposta)
            }
        )

}


function gostei(req, res){
    var post = req.body.numeroPostServer;

    if(post == undefined){
        console.log('post dando UNDEFINED')
    }else{
    medidaModel.gostei(post)
        .then(
            function (resposta) {
                console.log(`\nResultados encontrados: ${resposta.length}`);
                console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                res.json(resposta)
            }
        )}

}


function report(req, res){
    var post = req.body.numeroPostServer;

    if(post == undefined){
        console.log('post dando UNDEFINED')
    }else{
    medidaModel.report(post)
        .then(
            function (resposta) {
                console.log(`\nResultados encontrados: ${resposta.length}`);
                console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                res.json(resposta)
            }
        )}
        
}



















module.exports = {
    instrucao,
    postNovo,
    gostei,
    report


    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal

}