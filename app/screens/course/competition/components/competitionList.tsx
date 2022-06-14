import React, { Fragment, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TScreenProp } from "../../../types";
import { MAIN_THEME } from "../../../../common/constants";
import { useCompetition } from "../../../../hooks/useCompetition";
import CompetitionCard from "./competitionCard";
import { EDifficulty } from "../types";

type TCompetitionListProp = TScreenProp & {
    difficulty: string;
    actionButton: React.ReactNode;
};

const CompetitionList = ({
    navigation,
    difficulty,
    actionButton,
}: TCompetitionListProp) => {
    const { data: competitionData, loading } = useCompetition();

    if (loading) {
        return <Text>Loading data...</Text>;
    }

    return (
        <Fragment>
            {actionButton}
            {competitionData && competitionData.map((data, index) => (
                <CompetitionCard
                    key={index}
                    title={data.course}
                    amount={data.amount}
                />
            ))}
        </Fragment>
    );
};

export default CompetitionList;
