import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "src/auth/auth.controller";
import { AuthService } from "src/auth/auth.service";
import { AuthRepository } from "src/auth/auth.repository";
import { UsersModule } from "src/users/users.module";
import { LocalStrategy } from "src/auth/local.strategy";
import { JwtStrategy } from "src/auth/jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || "CODE_EXP",
            signOptions: { expiresIn: "1d" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthRepository, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
