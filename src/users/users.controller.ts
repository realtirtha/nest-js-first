import { Body, Controller, Get, Post, Req, Res, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('sortBy') sortBy: string){
        console.log(sortBy);
        return[{username:'Tirtha', mail:'tirtha@mail.com'}]
    }

    @Get('test')
    testGet(){
        return{key:'isReturned?'};
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData:CreateUserDto){
        console.log(userData);
        return{};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        console.log(id);
        return {id};
    }
}
