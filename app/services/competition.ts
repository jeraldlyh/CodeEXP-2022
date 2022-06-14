import axiosInstance from "../axios";
import { TCompetition } from "../screens/course/competition/types";

const createCompetition = async (competition: TCompetition) => {
    return await axiosInstance.post("/competition", competition);
};

const joinCompetition = async (id: string) => {
    return await axiosInstance.post("/competition", id);
};

export const CompetitionService = {
    createCompetition,
    joinCompetition,
};
