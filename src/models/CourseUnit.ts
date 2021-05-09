import {Column,CreateDateColumn, Entity, PrimaryColumn, OneToMany} from 'typeorm';
import{v4 as uuid} from 'uuid';
import {Activy} from './Activy';

@Entity("courses_units")
class CourseUnit{

    constructor(id:string,name:string, description:string, created_at:Date, activies:Activy[]){
        this.id = id;

        if(!this.id) this.id = uuid();
        
        this.name = name;
        this.description = description;
        this.created_at = created_at;
        this.activies = activies;
    }

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Activy, activy => activy.course_unit_id)
    activies:Activy[];

    @CreateDateColumn()
    created_at: Date;

}

export {CourseUnit}