import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserId{
    id?: string;
}

class GetCoursesUnitsService{


    public async execute({id}:UserId){

        const couseUnitRepository = getRepository(CourseUnit);

        const coursesUnits = couseUnitRepository.find();

            if(!coursesUnits){
                return {
                    message: 'courses units not found'
            }
        }

        return coursesUnits;
    }

}

export {GetCoursesUnitsService}