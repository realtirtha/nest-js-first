import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get('')
    getUsers(){
        return[{name:'Tirtha', mail:'tirtha@mail.com'}]
    }

    @Get('posts')
    getUsersPosts(){
        return[
            {
                username:'Tirtha',
                mail: 'tirtha@mail.com',
                posts: [
                    {
                        id:1,
                        title: 'post 1'
                    },
                    {
                        id:2,
                        title: 'post 2'
                    }
                ]
            }
        ];
    }

    @Get('posts/comments')
    getUsersPostComments(){
        return[
            {
                id:1,
                title: 'post 1',
                comments: []
            }
        ]
    }
}
