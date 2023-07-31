import { Body, Controller, Get, Post, Req, Res, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
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
