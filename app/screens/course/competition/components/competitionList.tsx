import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "@rneui/base";
import { TScreenProp } from "../../../types";
import CreateCompetitionModal from "./createCompetitionModal";
import { MAIN_THEME } from "../../../../common/constants";

type TCompetitionListProp = TScreenProp & {
    difficulty: string;
    actionButton: React.ReactNode
};

const CompetitionList = ({ navigation, difficulty, actionButton }: TCompetitionListProp) => {
    const [isOpenCreateModal, setIsOpenCreateModal] = useState<boolean>(false);

    const renderScreen = () => {
        if (isOpenCreateModal) {
            return (
                <CreateCompetitionModal
                    isOpen={isOpenCreateModal}
                    setIsOpen={setIsOpenCreateModal}
                />
            );
        }
        return (
            <Fragment>
                {actionButton}
                <Text>{difficulty}</Text>
            </Fragment>
        );
    };

    return <Fragment>{renderScreen()}</Fragment>;
};

const styles = StyleSheet.create({
    newBattleButton: {
        marginTop: 29,
        width: "100%",
        paddingHorizontal: 26,
        paddingVertical: 12,
        backgroundColor: "white",
        borderRadius: 14,
        ...MAIN_THEME.SHADOW,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    newBattleButtonText: {
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
        flex: 1,
        color: "#888888",
    },
});

export default CompetitionList;
