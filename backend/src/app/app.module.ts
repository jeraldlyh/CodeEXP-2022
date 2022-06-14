import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "src/auth/auth.module";
import { CompetitionRepository } from "src/competition/competition.repository";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, CompetitionRepository],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
