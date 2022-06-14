import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJwt,
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || "CODE_EXP",
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }

    private static extractJwt(request: Request): string | null {
        console.log("receiving request")
        if (request.cookies && "accessToken" in request.cookies) {
            return request.cookies.accessToken;
        }
        return null;
    }
}
