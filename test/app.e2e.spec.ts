import {Test} from '@nestjs/testing'
import { AppModule } from '../src/app.module'
import { INestApplication } from '@nestjs/common'
import { ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma//prisma.service';
import * as pactum from 'pactum'
import { UserModule } from '../src/user/user.module';
import { AuthModule } from '../src/auth/auth.module';
import { AuthDto } from '../src/auth/dto';
describe ('App e2e', ()=>{
  let app : INestApplication;
  let prisma:PrismaService;
  beforeAll(async ()=>{
      const moduleRef= await Test.createTestingModule({
        imports:[AuthModule],
      }).compile();
      app =moduleRef.createNestApplication();
      app.useGlobalPipes(new ValidationPipe({
        whitelist: true
      }))
      await app.init();
      await app.listen(3001)
      prisma =app.get(PrismaService)
      await prisma.cleandb()
    })
    afterAll (()=>{
      app.close();
    })
    
    describe('Auth',()=>{
      describe('Signup',()=>{
        it('should signup ', ()=>{
          const dto:AuthDto={
            email:'vlad@gmail.com',
            password:'123'

          }
          return pactum.spec().post('http://localhost:3001/auth/singup').withBody(dto).expectStatus(201)
         })
      })
      describe('Signin',()=>{
        it.todo('should signin ')
      })
      
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
