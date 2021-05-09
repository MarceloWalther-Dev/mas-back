import{User} from '../models/User';

interface UserRepository {

   create:User;

   delete: void;

   update: User;

   get: User[];

}

export{UserRepository}