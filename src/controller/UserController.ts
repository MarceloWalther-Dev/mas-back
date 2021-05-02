import{Request, Response} from 'express';
import { CreateUserService } from '../services/CreateUserService';

class UserController{

    async create(req: Request, res:Response){
        const userData = req.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute(userData);

        return res.json(user);
    }

/*     async delete(req: Request, res:Response){
        const userData = req.params;
    }

    async update(req: Request, res:Response){
        const userData = req.params;


    }
 */


}

export{UserController}