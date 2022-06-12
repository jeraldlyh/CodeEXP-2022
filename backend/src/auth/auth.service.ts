import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "src/auth/auth.repository";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        readonly jwtTokenService: JwtService,
        readonly usersService: UsersService,
        readonly authRepostiory: AuthRepository,
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password) {
            // Extract password
            const { password, ...userDetails } = user;

            return userDetails;
        }
        return null;
    }

    async loginUser(user: any) {
        const payload = { username: user.username, sub: user.id };

        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}
