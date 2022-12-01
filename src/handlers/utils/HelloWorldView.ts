import express from 'express';

function renderHelloWorldView(req: express.Request, res: express.Response){
    res.render('pages/helloWorld');
}

export{renderHelloWorldView}