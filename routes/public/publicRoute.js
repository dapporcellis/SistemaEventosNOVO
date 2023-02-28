const express = require("express");
const router = express.Router();
const publicController = require("../../controller/public/publicController");



router.get("/:siglaano", publicController.home);

router.post("/:siglaano/sobre", publicController.sobre);

router.post("/:siglaano/ministrantes", publicController.ministrantes);

router.get("/:siglaano/cronograma", publicController.cronograma);

router.get("/:siglaano/noticias", publicController.noticias);

router.post("/:siglaano/contatos", publicController.contatos);


module.exports = router;
