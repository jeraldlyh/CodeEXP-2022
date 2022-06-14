import React, { Fragment, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TScreenProp } from "../../../types";
import { MAIN_THEME } from "../../../../common/constants";

type TCompetitionListProp = TScreenProp & {
    difficulty: string;
    actionButton: React.ReactNode;
};

const CompetitionList = ({
    navigation,
    difficulty,
    actionButton,
}: TCompetitionListProp) => {
    return (
        <Fragment>
            {actionButton}
            <Text>{difficulty}</Text>
        </Fragment>
    );
};

export default CompetitionList;
