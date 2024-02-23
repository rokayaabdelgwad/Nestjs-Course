import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),AuthModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
