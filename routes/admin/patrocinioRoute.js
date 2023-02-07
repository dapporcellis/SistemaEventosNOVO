const express = require("express");
const router = express.Router();
const patrocinioController = require("../../controller/admin/patrocinioController");
const upload = require("../../config/upload")

//rota para listar todos os patrocinios
router.get("/patrocinio/lst", patrocinioController.lst);
//rota para listar todos patrocinios de acordo com uma pesquisa
router.post("/patrocinio/lst", patrocinioController.filtro);
//rota para abrir a tela de adicionar patrocinio
router.get("/patrocinio/add", patrocinioController.abreadd);
//rota que adiciona o patrocinio
router.post("/patrocinio/add", upload.single('logo'), patrocinioController.add);
//rota para abrir a tela de editar patrocinio
router.get("/patrocinio/edt/:id", patrocinioController.abreedt);
//rota para editar o patrocinio
router.post("/patrocinio/edt/:id", upload.single('logo'),patrocinioController.edt);
//rota para deletar patrocinio
router.get("/patrocinio/del/:id", patrocinioController.del);

module.exports = router;
