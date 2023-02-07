const express = require("express");
const router = express.Router();
const ministranteController = require("../../controller/admin/ministranteController");
const upload = require("../../config/upload")

//rota para listar todos os admins
router.get("/ministrante/lst", ministranteController.lst);
//rota para listar todos admins de acordo com uma pesquisa
router.post("/ministrante/lst", ministranteController.filtro);
//rota para abrir a tela de adicionar admin
router.get("/ministrante/add", ministranteController.abreadd);
//rota que adiciona o admin
router.post("/ministrante/add", upload.single('foto'), ministranteController.add); 
//rota para abrir a tela de editar admin
router.get("/ministrante/edt/:id", ministranteController.abreedt);
//rota para editar o admin
router.post("/ministrante/edt/:id", upload.single('foto') ,ministranteController.edt);
//rota para deletar admin
router.get("/ministrante/del/:id", ministranteController.del);

module.exports = router;
