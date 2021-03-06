import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MAIN_THEME } from "../../../common/constants";
import { TScreenProp } from "../../types";

const SubNotification = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            height: 80,
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
            marginBottom: 15,
            backgroundColor: "#F9F9F9",
        },
        title: {
            fontSize: 15,
            color: "#2B2B2B",
            fontFamily: "Poppins-SemiBold",
        },
        time: {
            fontSize: 14,
            color: "#9999AA",
            fontFamily: "Poppins-Normal",
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={{ width: "15%", marginLeft: 8 }}>
                <Icon
                    name={props.icon}
                    size={25}
                    color={MAIN_THEME.COLOR.GREEN}
                />
            </View>
            <View
                style={{
                    justifyContent: "flex-start",
                    width: "85%",
                }}
            >
                <Text style={styles.title}> {props.text}</Text>
                <Text style={styles.time}> {props.time} hours ago</Text>
            </View>
        </TouchableOpacity>
    );
};

function NotificationsPage({ navigation }: TScreenProp) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <SubNotification
                        text="Call up on 28 May 2022"
                        time={2}
                        icon="lock-outline"
                        onPress={() => console.log("")}
                    />
                    <SubNotification
                        text="Reservist on 14 May 2022"
                        time={11}
                        icon="calendar-today"
                        onPress={() => console.log("")}
                    />
                    <SubNotification
                        text="Quiz submission due"
                        time={12}
                        icon="clipboard-list"
                        onPress={() => console.log("")}
                    />
                </View>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold",
        marginLeft: 3,
    },
    subHeader: {
        fontFamily: "Poppins-SemiBold",
        marginBottom: 10,
        marginTop: 17,
        marginLeft: 3,
        fontSize: 18,
    },
    subContainer: {
        width: "80%",
    },
    text: {
        color: "#9999AA",
        fontFamily: "Poppins-Normal",
    },
    individualRow: {
        height: 54,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 14,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 15,
    },
    container: {
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 30,
        alignItems: "center",
        backgroundColor: "#FFF",
        minHeight: "100%",
    },
});

export default NotificationsPage;
