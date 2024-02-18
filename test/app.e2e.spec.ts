import {Test} from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { INestApplication } from '@nestjs/common'
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
describe ('App e2e', ()=>{
    let app : INestApplication;
    let prisma:PrismaService;
    beforeAll(async ()=>{
      const moduleRef= await Test.createTestingModule({
        imports:[AppModule],
      }).compile();
      app =moduleRef.createNestApplication();
      app.useGlobalPipes(new ValidationPipe({
        whitelist: true
      }))
      await app.init();
      prisma =app.get(PrismaService)
      await prisma.cleandb()
    })
    afterAll (()=>{
      app.close();
    })
    
    describe('Auth',()=>{
      describe('Signup',()=>{
        it.todo('should signup ')
      })
      describe('Signin',()=>{})
      
    }) 
    describe('User',()=>{
      describe('Get me',()=>{})
      describe('Edit user',()=>{})
    })
    describe('Bookmarks',()=>{
      describe('Create bookmark ',()=>{})
      describe('Get bookmark ',()=>{})
       describe('Get bookmark by id  ',()=>{})
      describe('Edit bookmark',()=>{})
       describe('Delete bookmark',()=>{})
      
      
      
    })
  })