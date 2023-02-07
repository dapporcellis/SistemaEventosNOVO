const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");

var moment = require('moment');
app.locals.moment = moment;

//importar as rotas
const adminRoute = require("./routes/admin/adminRoute");
const eventoRoute = require("./routes/admin/eventoRoute");
const loginRoute = require("./routes/admin/loginRoute");
const ministranteRoute = require("./routes/admin/ministranteRoute");
const noticiaRoute = require("./routes/admin/noticiaRoute");
const oficinaRoute = require("./routes/admin/oficinaRoute");
const palestraRoute = require("./routes/admin/palestraRoute");
const patrocinioRoute = require("./routes/admin/patrocinioRoute");
const publicRoute = require("./routes/public/publicRoute");
const autenticacao = require('./config/autenticacao')

const porta = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate('session'));
app.set("view engine", "ejs");

app.use("/", publicRoute);
app.use("/admin", loginRoute);
app.use("/admin", autenticacao, adminRoute);
app.use("/admin", autenticacao, eventoRoute);
app.use("/admin", autenticacao, ministranteRoute);
app.use("/admin", autenticacao, noticiaRoute);
app.use("/admin", autenticacao, oficinaRoute);
app.use("/admin", autenticacao, palestraRoute);
app.use("/admin", autenticacao, patrocinioRoute);

app.listen(porta, () => {
  console.log("Servidor funcionando na porta: " + porta);
});
