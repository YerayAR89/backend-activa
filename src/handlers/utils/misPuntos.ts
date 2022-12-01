import express from 'express';
import {Studentusereward} from '../../model/types/studentusereward.js';

async function renderMisPuntos(req: express.Request, res: express.Response){

    res.render('pages/puntos');
}

export{renderMisPuntos}