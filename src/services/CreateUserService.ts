import {UserRepository} from '../repository/UserRepository';
import {User} from '../models/User';
import {getRepository } from 'typeorm'
import {hash} from 'bcryptjs';

interface UserData {
    name:string;
    email:string;
    password:string;
}


class CreateUserService /* implements UserRepository */ {

    public async execute({name,email,password}: UserData){

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({email});

        if(checkUserExists){
            throw new Error('Usuario já cadastrado');
        }

        const hashPassword = await hash(password, 8);

        const user = {
            name,
            email,
            password: hashPassword
        }

        await usersRepository.save(user);

        return user;

    }
}

export {CreateUserService}