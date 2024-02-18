import { Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { Get } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { use } from 'passport';
import { GetUser } from '../auth/decortor';
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
// users/me
@UseGuards(JwtGuard) 
 @Get('me')
 getMe(@GetUser('') user:User ){

     return user;
     
 }
 @Patch()
 editUser(){
    
 }
}
