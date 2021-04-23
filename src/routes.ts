import {response, Router} from 'express';

const routes = Router();


routes.get('/user', (req, res) => {
     res.json(
         "Rota de usuario"
    );
})



export default routes;