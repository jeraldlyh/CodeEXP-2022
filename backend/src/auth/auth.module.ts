import { Module } from "@nestjs/common";
import { AuthController } from "src/auth/auth.controller";
import { AuthService } from "src/auth/auth.service";
import { AuthRepository } from "src/auth/auth.repository";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AuthRepository],
})
export class AuthModule {}
