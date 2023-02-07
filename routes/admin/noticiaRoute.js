const express = require("express");
const router = express.Router();
const noticiaController = require("../../controller/admin/noticiaController");
const upload = require("../../config/upload")

//rota para listar todos os noticias
router.get("/noticia/lst", noticiaController.lst);
//rota para listar todos noticias de acordo com uma pesquisa
router.post("/noticia/lst", noticiaController.filtro);
//rota para abrir a tela de adicionar noticia
router.get("/noticia/add", noticiaController.abreadd);
//rota que adiciona o noticia
router.post("/noticia/add", upload.single('foto'), noticiaController.add);
//rota para abrir a tela de editar noticia
router.get("/noticia/edt/:id", noticiaController.abreedt);
//rota para editar o noticia
router.post("/noticia/edt/:id", upload.single('foto'), noticiaController.edt);
//rota para deletar noticia
router.get("/noticia/del/:id", noticiaController.del);

module.exports = router;
