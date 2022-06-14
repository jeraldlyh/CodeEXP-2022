import { Module } from "@nestjs/common";
import { CompetitionService } from "./competition.service";
import { CompetitionController } from "./competition.controller";
import { CompetitionRepository } from "src/competition/competition.repository";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [UsersModule],
    controllers: [CompetitionController],
    providers: [CompetitionService, CompetitionRepository],
})
export class CompetitionModule {}
