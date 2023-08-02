import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
     
    private fakeUsers = [
        {username:'Tirtha', mail:'tirtha@mail.com'},
        {username:'Cory', mail:'cory@mail.com'},
        {username:'neleam', mail:'nelam@mail.com'}


    ];
    fetchUsers(){
        return this.fakeUsers;
    }


    createUser(userDetails: CreateUserType){
        this.fakeUsers.push(userDetails);
        return;

    }

    fetchUserById(id:number){
        return {id, username: 'Amit', mail:'amit@email.com'};
    }
}
