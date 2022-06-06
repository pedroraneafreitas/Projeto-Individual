var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/instrucao", function (req, res) {
    medidaController.instrucao( res);
})

router.post("/postNovo", function (req, res) {
    medidaController.postNovo(req, res);
}) 

router.post("/gostei", function (req, res) {
    medidaController.gostei(req, res);
}) 

router.post("/report", function (req, res) {
    medidaController.report(req, res);
}) 




module.exports = router;