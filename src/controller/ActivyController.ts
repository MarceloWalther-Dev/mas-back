import{Request, Response} from 'express';
import {CreateActivyService} from '../services/CreateActivyService';
import { GetActiviesService } from '../services/GetActiviesService';

class ActivyController{
    async create(req: Request, res: Response){

        const activyData = req.body;
        const createActivyService = new CreateActivyService();
        const activy = await createActivyService.execute(activyData);
        console.log("inserido com sucesso")
        return res.json(activy);
    }


    async show(req: Request, res: Response){
        const userId = req.body.user;

        const getActivies = new GetActiviesService();

        const activies = await getActivies.execute(userId);

        return res.json(activies);
    }

}

export {ActivyController}