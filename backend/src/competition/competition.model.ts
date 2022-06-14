import { DocumentData, QueryDocumentSnapshot } from "firebase-admin/firestore";
import { Difficulty } from "src/competition/dto/create-competition.dto";

export class Competition {
    constructor(
        readonly host: {
            name: string;
            avatar: string;
            isEntered: boolean;
            isCorrect: boolean;
            isSubmitted: boolean;
        },
        readonly player: {
            name: string;
            avatar: string;
            isEntered: boolean;
            isCorrect: boolean;
            isSubmitted: boolean;
        },
        readonly quiz: {
            question: string;
            options: string[];
            answer: string;
        },
        readonly isValid: boolean,
        readonly isStarted: boolean,
        readonly amount: string,
        readonly course: string,
        readonly difficulty: Difficulty,
    ) {}
}

export const competitionConverter = {
    toFirestore(competition: Competition): DocumentData {
        return {
            host: {
                name: competition.host.name,
                avatar: competition.host.avatar,
                isEntered: competition.host.isEntered,
                isCorrect: competition.host.isCorrect,
                isSubmitted: competition.host.isSubmitted,
            },
            player: {
                name: competition.player.name,
                avatar: competition.player.avatar,
                isEntered: competition.player.isEntered,
                isCorrect: competition.player.isCorrect,
                isSubmitted: competition.player.isSubmitted,
            },
            quiz: {
                question: competition.quiz.question,
                options: competition.quiz.options,
                answer: competition.quiz.answer,
            },
            isValid: competition.isValid,
            isStarted: competition.isStarted,
            amount: competition.amount,
            course: competition.course,
            difficulty: competition.difficulty,
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Competition {
        const data = snapshot.data();

        return new Competition(
            {
                name: data.host.name,
                avatar: data.host.avatar,
                isEntered: data.host.isEntered,
                isCorrect: data.host.isCorrect,
                isSubmitted: data.host.isSubmitted,
            },
            {
                name: data.player.name,
                avatar: data.player.avatar,
                isEntered: data.player.isEntered,
                isCorrect: data.player.isCorrect,
                isSubmitted: data.player.isSubmitted,
            },
            { question: data.quiz.question, options: data.quiz.options, answer: data.quiz.answer },
            data.isValid,
            data.isStarted,
            data.amount,
            data.course,
            data.difficulty,
        );
    },
};
