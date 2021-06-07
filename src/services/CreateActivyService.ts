
import {Activy} from '../models/Activy';
import {getRepository } from 'typeorm'


interface ActivyData {
    name: string;
    activy_date: string;
    grade: number;
    courseUnitId: string;
}

class CreateActivyService {

    async execute({name,activy_date,grade, courseUnitId}:ActivyData) {

        const activyRepository = getRepository(Activy);

        const activy = activyRepository.create({
            name,
            activy_date,
            grade,
            courseUnitId
        });

        await activyRepository.save(activy);

        return activy;

    }
}

export {CreateActivyService};

/* {
    "name": "marcelo",
    "activy_date":"27/05/1987",
    "course_unit_id": "12"
} */