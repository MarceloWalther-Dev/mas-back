import { Column,CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinTable } from 'typeorm';
import{ v4 as uuid } from 'uuid';
import{ CourseUnit } from './CourseUnit';

@Entity("activys")
class Activy{


    constructor(id: string,name:string, activy_date:Date, course_unit_id:CourseUnit, created_at:Date, grade:number, courseUnitId:string){
        this.id = id;

        if(!this.id) this.id = uuid();
        
        this.name = name;
        this.activy_date = activy_date;
        this.course_unit = course_unit_id;
        this.create_at = created_at;
        this.grade = grade;
        this.courseUnitId = courseUnitId;
    }

    @PrimaryColumn()
    readonly id:string;   
    
    @Column()
    name:string;

    @CreateDateColumn()
    activy_date:Date;

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activies)
    @JoinTable()
    course_unit:CourseUnit;

    @CreateDateColumn()
    create_at:Date;

    @Column()
    grade: number;

    @Column()
    courseUnitId:string;
}

export {Activy}