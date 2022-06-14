import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TScreenProp } from "../../../types";
import { useCompetition } from "../../../../hooks/useCompetition";
import CompetitionCard from "./competitionCard";
import { ScrollView } from "react-native-gesture-handler";

type TCompetitionListProp = TScreenProp & {
    difficulty: string;
    actionButton: React.ReactNode;
};

const Space = () => <View style={{ marginBottom: 15 }} />;

const CompetitionList = ({
    navigation,
    difficulty,
    actionButton,
}: TCompetitionListProp) => {
    const { data: competitionData, loading } = useCompetition();
    const [availableCompetitions, setAvailableCompetitions] = useState<any>();

    if (loading) {
        return <Text>Loading data...</Text>;
    }

    useEffect(() => {
        if (competitionData) {
            setAvailableCompetitions(
                competitionData.filter((data) => data.difficulty === difficulty)
            );
        }
    }, []);

    return (
        <Fragment>
            {actionButton}
            <Space />
            {availableCompetitions && availableCompetitions.length > 0 ? (
                <ScrollView>
                    {availableCompetitions.map((data, index) => (
                        <Fragment key={index}>
                            <CompetitionCard
                                title={data.course}
                                amount={data.amount}
                            />
                            <Space />
                        </Fragment>
                    ))}
                </ScrollView>
            ) : (
                <Text style={styles.emptyText}>
                    There's currently no battles going on!
                </Text>
            )}
        </Fragment>
    );
};

const styles = StyleSheet.create({
    emptyText: {
        fontFamily: "Poppins-Normal",
        textAlign: "center",
    },
});

export default CompetitionList;
