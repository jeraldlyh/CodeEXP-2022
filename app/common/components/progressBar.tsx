import { StyleSheet, View } from "react-native";
import { MAIN_THEME } from "../constants";

type TProgressBarProps = {
    numerator: number;
    denominator: number;
};

const ProgressBar = ({ numerator, denominator }: TProgressBarProps) => {
    const getProgress = (): string => {
        return Math.round((numerator / denominator) * 100) + "%";
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: 3,
                    borderRadius: 9,
                    backgroundColor: "#D7D7D7",
                }}
            >
                <View
                    style={{
                        width: getProgress(),
                        height: "100%",
                        backgroundColor: MAIN_THEME.COLOR.GREEN,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});

export default ProgressBar;
