import useSWR from "swr";
import { EDifficulty } from "../screens/course/competition/types";

type TCompetition = {
    host: {
        name: string;
        avatar: string;
        isEntered: boolean;
        isCorrect: boolean;
        isSubmitted: boolean;
    };
    player: {
        name: string;
        avatar: string;
        isEntered: boolean;
        isCorrect: boolean;
        isSubmitted: boolean;
    };
    quiz: {
        question: string;
        options: string[];
        answer: string;
    };
    isValid: boolean;
    isStarted: boolean;
    amount: string;
    course: string;
    difficulty: EDifficulty;
};

export const useCompetition = () => {
    const { data, error, mutate } = useSWR<TCompetition[]>("/competition", {
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        dedupingInterval: 5000,
        refreshInterval: 1000 * 30,
    });

    return {
        data,
        mutate: mutate,
        loading: typeof data === "undefined" && typeof error === "undefined",
    };
};
