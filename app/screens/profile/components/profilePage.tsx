import React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MAIN_THEME } from "../../../common/constants";
import { TScreenProp } from "../../types";
import { Card } from "./settings";

function ProfilePage({ navigation }: TScreenProp) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.summaryContainer}>
                <View style={{ width: "35%" }}>
                    <Image
                        source={require("../../../assets/profile-photo.jpg")}
                        style={{ height: 90, width: 90, borderRadius: 14 }}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        justifyContent: "flex-start",
                        width: "65%",
                    }}
                >
                    <View style={styles.summaryContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <View style={styles.pointsContainer}>
                            <Image
                                source={require("../../../assets/coin.png")}
                                style={{
                                    height: 20,
                                    width: 20,
                                    paddingRight: 3,
                                }}
                                resizeMode="cover"
                            />
                            <Text style={styles.pointsText}>256 Points</Text>
                        </View>
                    </View>
                    <View style={styles.summaryContent}>
                        <Icon
                            name="calendar-today"
                            size={23}
                            color={MAIN_THEME.COLOR.GREEN}
                        />
                        <Text style={styles.summaryText}>
                            johndoe@gmail.com
                        </Text>
                    </View>
                    <View style={styles.summaryContent}>
                        <Icon
                            name="cellphone"
                            size={23}
                            color={MAIN_THEME.COLOR.GREEN}
                        />
                        <Text style={styles.summaryText}>+65 9123 4567</Text>
                    </View>
                </View>
            </View>

            <View>
                <Card
                    text="Redeem rewards"
                    icon="gift"
                    onPress={() => console.log("")}
                />
                <Card
                    text="Settings"
                    icon="cog"
                    onPress={() => navigation.push("Settings")}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: "center",
        backgroundColor: "#FFF",
        minHeight: "100%",
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 15,
    },
    subContainer: {
        width: "80%",
    },
    summaryContainer: {
        height: 130,
        flexDirection: "row",
        width: 350,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        shadowColor: "#18396B",
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        marginBottom: 25,
        marginTop: 10,
        backgroundColor: "#F9F9F9",
    },
    name: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
        marginBottom: 8,
    },
    summaryText: {
        fontFamily: "Poppins-Normal",
        fontSize: 15,
        marginLeft: 4,
    },
    summaryContent: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 4,
    },
    pointsContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: MAIN_THEME.COLOR.GREEN,
        height: 30,
        alignItems: "center",
        marginLeft: 20,
        paddingHorizontal: 5,
        borderRadius: 8,
    },
    pointsText: {
        fontFamily: "Poppins-Normal",
        fontSize: 14,
        color: "white",
    },
});

export default ProfilePage;
