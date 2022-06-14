import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/auth/auth.module";
import { CompetitionModule } from "src/competition/competition.module";
import { UsersModule } from "src/users/users.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, CompetitionModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
