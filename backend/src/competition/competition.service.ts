import { Injectable } from "@nestjs/common";
import { CompetitionRepository } from "src/competition/competition.repository";
import { CreateCompetitionDto } from "src/competition/dto/create-competition.dto";
import { sample } from "lodash";
import { COMPETITION_MOCK_DATA, TQuiz } from "src/competition/competition.mock";
import { User } from "src/users/user.decorator";
import { UsersService } from "src/users/users.service";
import { Competition } from "src/competition/competition.model";

@Injectable()
export class CompetitionService {
    constructor(readonly usersService: UsersService, readonly competitionRepository: CompetitionRepository) {}

    async findAll(): Promise<Competition[]> {
        return await this.competitionRepository.findAll();
    }

    async create(@User() user, createCompetitionDto: CreateCompetitionDto): Promise<{ docId: string } & TQuiz> {
        const quiz = this.getRandomQuiz(createCompetitionDto.course);
        const userProfile = await this.usersService.findOne(user.username);

        const dto = {
            host: {
                name: userProfile.username,
                avatar: "https://picsum.photos/200",
                isEntered: false,
                isCorrect: false,
                isSubmitted: false,
            },
            player: {
                name: "",
                avatar: "",
                isEntered: false,
                isCorrect: false,
                isSubmitted: false,
            },
            quiz: quiz,
            isValid: true,
            isStarted: false,
            amount: createCompetitionDto.amount,
            course: createCompetitionDto.course,
            difficulty: createCompetitionDto.difficulty,
        };

        const docId = await this.competitionRepository.create(dto);

        return {
            docId,
            ...quiz,
        };
    }

    getRandomQuiz(course: string): TQuiz {
        return sample(COMPETITION_MOCK_DATA[course]);
    }
}
