import { View, Text } from "react-native";
import { TScreenProp } from "../../../types";

type TCompetitionListProp = TScreenProp & {
    difficulty: string;
};

const CompetitionList = ({ navigation, difficulty }: TCompetitionListProp) => {
    return (
        <View>
            <Text>{difficulty}</Text>
        </View>
    );
};

export default CompetitionList;
