import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_THEME_COLOR } from "../../../../common/constants";

const BattleCard = () => {
    return (
        <View style={styles.competeBox}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Compete and earn points</Text>
                <TouchableOpacity style={styles.battleButton}>
                    <Text style={styles.battleButtonText}>Join battles</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.battleDescriptionText}>
                Battle against friends, win points and redeem rewards!
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    competeBox: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        width: "100%",
        backgroundColor: MAIN_THEME_COLOR.CARD,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginTop: 25,
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 15,
    },
    battleButton: {
        backgroundColor: MAIN_THEME_COLOR.GREEN,
        borderRadius: 8,
    },
    battleButtonText: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        color: "white",
        fontFamily: "Poppins-Normal",
    },
    battleDescriptionText: {
        marginTop: 19,
        fontFamily: "Poppins-Normal",
        fontSize: 14,
    },
});

export default BattleCard;
