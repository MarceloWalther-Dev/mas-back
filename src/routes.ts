import {Router,Request,Response,response} from 'express';
import {UserController} from './controller/UserController';
import {ActivyController} from './controller/ActivyController';
import {CourseUnitController} from './controller/CourseUnitController';
import{AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

interface UserRequest{
    name:string;
    email:string;
    password:string;
}


const userController = new UserController();
const activyController = new ActivyController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();


routes.get('/user', (req, res) => {
     res.json(
         "Rota de usuario"
    );
})

routes.post('/auth', authenticateController.create);
routes.post('/user', userController.create);
routes.post('/activy',authenticated ,activyController.create);
routes.post('/courseunit',authenticated ,courseUnitController.create);



export default routes;