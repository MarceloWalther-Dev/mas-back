import{Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';
import { GetUserService } from '../services/GetUserService';

class UserController{

    async create(req: Request, res:Response){
        const userData = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute(userData);

        return res.json(user);
    }


    async show(req: Request, res: Response){
        const userData = req.body.userData;
        const getUser = new GetUserService();
        const user = await getUser.execute(userData);

        return res.json(user);
    }

}

export{UserController}