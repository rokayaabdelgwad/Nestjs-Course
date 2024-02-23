import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto"; // Make sure to import the correct path to your DTO

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup") 
    async signup(@Body() dto: AuthDto) {
        return await this.authService.signup(dto);
    }


    @Post("login")
    signin(@Body () dto:AuthDto){
        
        return  this.authService.signin(dto)
    }

    
}

