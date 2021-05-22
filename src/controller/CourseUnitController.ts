import{Request, Response} from 'express';
import { CreateCourseUnitService} from '../services/CreateCourseUnitService';
import { GetCoursesUnitsService } from '../services/GetCoursesUnitsService';

class CourseUnitController {

    async create(req: Request, res:Response){
        
        const courseData = req.body;
        const createCourseUnitService = new CreateCourseUnitService();
        const course = await createCourseUnitService.execute(courseData);

        return res.json(course);
    }


    async show(req: Request, res: Response){
        const userId = req.body.user;

        const getCoursesUnits = new GetCoursesUnitsService();

        const coursesUnits = await getCoursesUnits.execute(userId);

        return res.json(coursesUnits);
    }



}

export{CourseUnitController }