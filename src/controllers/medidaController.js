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


















// function buscarUltimasMedidas(req, res) {

//     const limite_linhas = 7;

//     var idAquario = req.body.idAquario;

//     console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

//     medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).json("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }




module.exports = {
    instrucao,
    postNovo


    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal

}