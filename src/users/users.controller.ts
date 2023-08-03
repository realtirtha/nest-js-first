import { Body, Controller, Get, Post, Req, Res, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import { ValidateCreateUserPipe } from './pipes/validate-create-user/validate-create-user.pipe';

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
    createUser(@Body(ValidateCreateUserPipe) userData:CreateUserDto){
        console.log(userData.age.toPrecision());
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        const user = this.userService.fetchUserById(id);
        if (!user)
            throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
        return user;

    }
}
