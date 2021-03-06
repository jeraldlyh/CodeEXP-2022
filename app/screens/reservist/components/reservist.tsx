import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { TScreenProp } from "../../types";

export default function ReservistPage({ navigation }: TScreenProp) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.recapContainer}>
                <Image
                    source={require("../../../assets/recap-1.jpg")}
                    style={{
                        height: "100%",
                        borderRadius: 10,
                        width: 140,
                    }}
                />
                <View
                    style={{
                        padding: 10,
                        width: "100%",
                        marginLeft: 10,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 16,
                            marginBottom: 8,
                            marginTop: 4,
                        }}
                    >
                        Kranji Camp
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            fontSize: 14,
                            marginBottom: 10,
                        }}
                    >
                        Auditorium
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.nextEvent}>
                <Text style={{ fontWeight: "bold" }}>Sunday, 14 Aug 2022</Text>
                <Text>14:00-15:00</Text>
            </View>
            <View style={styles.reminders}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    Reminders
                </Text>
                <Text style={{ marginTop: 8 }}>• Bring fieldpack</Text>
                <Text style={{ marginTop: 5 }}>• Report in Smart 4</Text>
                <Text style={{ marginTop: 5 }}>• Watch recap courses</Text>
            </View>
            <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 17 }}>
                Recap videos
            </Text>

            <TouchableOpacity style={styles.recapContainer}>
                <View style={{ padding: 15 }}>
                    <Text
                        style={{
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 14,
                            marginBottom: 10,
                        }}
                    >
                        Setting up of signal nets
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            fontSize: 13,
                            marginBottom: 10,
                        }}
                    >
                        8/20 topics completed
                    </Text>
                    <View>
                        <View
                            style={{
                                width: 150,
                                height: 4,
                                borderRadius: 9,
                                backgroundColor: "#e8e8e8",
                                marginBottom: 15,
                            }}
                        >
                            <View
                                style={{
                                    width: "40%",
                                    height: "100%",
                                    backgroundColor: "#91B48C",
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                        onPress={() =>
                            navigation.push("CourseStackRedirect", {
                                screen: "CourseDetail",
                            })
                        }
                    >
                        <View
                            style={{
                                width: 120,
                                height: 22,
                                borderRadius: 10,
                                backgroundColor: "#F2F2F2",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Poppins-Normal",
                                    fontSize: 12,
                                    color: "black",
                                }}
                            >
                                Continue Course
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Image
                    source={require("../../../assets/recap-1.jpg")}
                    style={{
                        height: "100%",
                        borderRadius: 10,
                        width: 140,
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        paddingTop: 25,
        paddingHorizontal: 20,
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    reminders: {
        marginTop: 15,
        padding: 15,
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: "#fff",
        flexDirection: "column",
    },
    nextEvent: {
        marginTop: 15,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#f5faff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    recapContainer: {
        marginTop: 15,
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
