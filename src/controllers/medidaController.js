const { json } = require("express/lib/response");
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


function gostei(req, res) {
    var post = req.body.numeroPostServer;

    if (post == undefined) {
        console.log('post dando UNDEFINED')
    } else {
        medidaModel.gostei(post)
            .then(
                function (resposta) {
                    console.log(`\nResultados encontrados: ${resposta.length}`);
                    console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                    res.json(resposta)
                }
            )
    }

}


function report(req, res) {
    var post = req.body.numeroPostServer;

    if (post == undefined) {
        console.log('post dando UNDEFINED')
    } else {
        medidaModel.report(post)
            .then(
                function (resposta) {
                    console.log(`\nResultados encontrados: ${resposta.length}`);
                    console.log(`Resultados: ${JSON.stringify(resposta)}`); // transforma JSON em String

                    res.json(resposta)
                }
            )
    }

}




function reportado(req, res) {

    var i = req.params.i;

    console.log(`Recuperando medidas em tempo real no Reportado`);

    medidaModel.reportado(i).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function usuariosCadastrados(req, res) {

    var data = req.body.requerimentoServer

    console.log(`Recuperando medidas em tempo real no UC`);

    medidaModel.usuariosCadastrados(data).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cadastradosTotal(req, res) {
    var i = req.params.i;

    console.log(`Recuperando medidas em tempo real no UC`);

    medidaModel.cadastradosTotal(i).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos dados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
    instrucao,
    postNovo,
    gostei,
    report,
    reportado,
    cadastradosTotal,
    usuariosCadastrados
}