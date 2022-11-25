"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const config_js_1 = require("./config.js");
const methodOverride = require('method-override');
const app = (0, express_1.default)();
//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express_1.default.static(__dirname + "/public")); //prueba imagenes
const path_static_files = path_1.default.join(__dirname, "..", "public");
app.use(express_1.default.static(path_static_files));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
//prueba
app.get('/miperfil', (req, res) => {
    res.render("miperfil");
});
app.get('/index', (req, res) => {
    res.render("index");
});
app.get('/puntos', (req, res) => {
    res.render("puntos");
});
app.get('/ranking', (req, res) => {
    res.render("ranking");
});
app.use("/", router_js_1.router);
app.listen(config_js_1.PORT, () => {
    console.log(`Escuchando en el puerto ${config_js_1.PORT}`);
});
