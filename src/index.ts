import express from 'express';
import {router} from './routes/router.js';
import path from 'path';
import {PORT} from './config.js';

const methodOverride = require('method-override');

const app = express();

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + "/public")); //prueba imagenes

const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({extended:false}));
app.use(methodOverride((req: express.Request, res: express.Response)=>{
    if (req.body && typeof req.body === 'object' && "_method" in req.body){
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));


//prueba
app.get('/miperfil', (req, res) => {
    res.render("miperfil")
})

app.get('/index', (req, res) => {
    res.render("index")
})

app.get('/puntos', (req, res) => {
    res.render("puntos")
})

app.get('/ranking', (req, res) => {
    res.render("ranking")
})


app.use("/", router);

app.listen(PORT, ()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})
