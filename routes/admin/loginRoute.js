const express = require("express");
const router = express.Router();
const loginController = require("../../controller/admin/loginController");
const passport = require('../../config/passport')

//rota para abrir tela de login
router.get("/", loginController.abretela);
//rota para logar
router.post("/", passport.authenticate('local', {
    successRedirect: '/admin/admin/lst',
    failureRedirect: '/admin'
  })
);

module.exports = router;
