// import { Global, Injectable } from "@nestjs/common";
// import { ConfigService } from "@nestjs/config";
// import { PassportStrategy } from "@nestjs/passport";
// import { Passport } from "passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
// import { PrismaService } from "src/prisma/prisma.service";

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
//     constructor( config :ConfigService,private prisma:PrismaService){
//         super({
//             jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            
//             secretOrKey: config.get('JWT_SECRET')
//         })

//     }
//     async validate(payload: {sub:number;email:String}){
//         const user = await this.prisma.user.findUnique({
//             where:{
//                 id:payload.sub
//             }
//         })
//         delete user.hash
//         return user
//     }
// }
// jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
