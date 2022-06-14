import axiosInstance from "../axios";
import { TCompetition } from "../screens/course/competition/types";

const createCompetition = async (competition: TCompetition) => {
    return await axiosInstance.post("/competition", competition);
};

export const CompetitionService = {
    createCompetition,
};
