
import {Activy} from '../models/Activy';
import {getRepository } from 'typeorm'


interface ActivyData {
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivyService{
    public async execute ({name,activy_date,course_unit_id}: ActivyData){
        
        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            course_unit_id
        })

        console.log("Salvando a activy no banco de dados")
       // await activyRepository.save(activy);


        return activy;
    }
}

export {CreateActivyService}


/* {
    "name": "marcelo",
    "activy_date":"27/05/1987",
    "course_unit_id": "12"
} */