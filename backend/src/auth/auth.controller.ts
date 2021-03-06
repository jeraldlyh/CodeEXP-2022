import { Request, Response, Controller, Post, UseGuards, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RegisterUserDto } from "src/auth/auth.dto";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(AuthGuard("local"))
    @Post("/login")
    async loginUser(@Request() request, @Response() response) {
        const jwtToken = await this.authService.loginUser(request.user);

        response.cookie("accessToken", jwtToken.access_token, {
            httponly: true,
        });

        return response.send(jwtToken);
    }

    @Post("/register")
    async registerUser(@Response() response, @Body() registerUserDto: RegisterUserDto) {
        const jwtToken = await this.authService.registerUser(registerUserDto);

        response.cookie("accessToken", jwtToken.access_token, {
            httponly: true,
        });

        return response.send(jwtToken);
    }

    @UseGuards(JwtAuthGuard)
    @Post("/logout")
    async logoutUser(@Response() response) {
        response.cookie("accessToken", "", { maxAge: 0 });

        return response.end();
    }
}
