import{Request, Response} from 'express';
import {CreateActivyService} from '../services/CreateActivyService';

class ActivyController{
    async create(req: Request, res: Response){

        const activyData = req.body;
        const createActivyService = new CreateActivyService();
        const activy = await createActivyService.execute(activyData);
        console.log("inserido com sucesso")
        return res.json(activy);
    }


}

export {ActivyController}