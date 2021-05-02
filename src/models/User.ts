import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("users")
class User {
    constructor(id:string,name:string, email:string, password:string, created_at:Date){
        this.id = id;

        if(!this.id) this.id = uuid();

        this.name = name;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
    }
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;
}
export {User};