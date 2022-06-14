import { IsEnum, IsNumber, IsNumberString, IsString } from "class-validator";

export enum Difficulty {
    Easy,
    Intermediate,
    Advanced,
}
export class CreateCompetitionDto {
    @IsString()
    course: string;

    @IsEnum(Difficulty)
    difficulty: Difficulty;

    @IsNumberString()
    amount: string;
}
