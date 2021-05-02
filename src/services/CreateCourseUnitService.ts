import {CourseUnit} from '../models/CourseUnit';
import {Activy} from '../models/Activy';
import {getRepository } from 'typeorm'


interface CouserData {
    name:string;
    description:string;
    activies:Activy[];
}


class CreateCourseUnitService /* implements UserRepository */ {

    public async execute({name,description,activies}: CouserData){

        const courseUnitRepository = getRepository(CourseUnit);

        const course = courseUnitRepository.create({
            name,description,activies
        });

        console.log("Salvando no banco de dados o course")
        //await courseUnitRepository.save(course);

        return course;

    }
}

export {CreateCourseUnitService}