import { Body, Controller, Get, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateCompetitionDto } from "src/competition/dto/create-competition.dto";
import { User } from "src/users/user.decorator";
import { CompetitionService } from "./competition.service";

@UseGuards(JwtAuthGuard)
@Controller("competition")
export class CompetitionController {
    constructor(private readonly competitionService: CompetitionService) {}

    @Get("/")
    async findAll() {
        return await this.competitionService.findAll();
    }

    @Post("/")
    async create(@User() user, @Body() createCompetitionDto: CreateCompetitionDto) {
        return await this.competitionService.create(user, createCompetitionDto);
    }

    @Post("/join")
    async join(@User() user, @Body() body) {
        console.log("here", body);
        return await this.competitionService.join(user, body);
    }
}
