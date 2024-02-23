import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString,IsNumber, IsPositive, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
    constructor(email: string, password: string, firstName: string) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
    }
   
    @ApiProperty({ example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

	@IsString()
    @IsNotEmpty()
    readonly password:string


    @ApiProperty({ example: 36 })
    @Transform(({ value }) => parseInt(value))
    readonly firstName: string;


}
