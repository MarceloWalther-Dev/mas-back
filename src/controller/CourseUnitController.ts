import{Request, Response} from 'express';
import { CreateCourseUnitService} from '../services/CreateCourseUnitService';

class CourseUnitController {

    async create(req: Request, res:Response){
        
        const courseData = req.body;
        const createCourseUnitService = new CreateCourseUnitService();
        const course = await createCourseUnitService.execute(courseData);

        return res.json(course);
    }



}

export{CourseUnitController }