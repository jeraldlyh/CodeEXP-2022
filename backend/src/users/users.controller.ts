import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { User } from "src/users/user.decorator";
import { TUserJwtDetails } from "src/users/users.type";
import { UsersService } from "./users.service";

@UseGuards(JwtAuthGuard)
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get("/")
    async getProfile(@User() user: TUserJwtDetails) {
        return await this.usersService.findOne(user.username);
    }
}
