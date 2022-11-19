import express from 'express';
import { router } from './routes/router.js';
import path from 'path';
import { PORT } from './config.js';
const methodOverride = require('method-override');
const app = express();
const path_static_files = path.join(__dirname, "..", "public");
app.use(express.static(path_static_files));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && "_method" in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
app.use("/", router);
app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});
