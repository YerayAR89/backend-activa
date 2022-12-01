import express from 'express';
import { router } from './routes/router.js';
import path from 'path';
import * as dotenv from 'dotenv';

const methodOverride = require('method-override');

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride((req: express.Request, res: express.Response) => {
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

/*app.get('/miperfil', (req, res) => {
    res.render("miperfil")
})*/

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

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})
