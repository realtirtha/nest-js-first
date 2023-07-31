import { Injectable } from '@nestjs/common';

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


    createUsers(){
        
    }
}
