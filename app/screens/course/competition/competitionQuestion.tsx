import React from "react";

import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { MAIN_THEME } from "../../../common/constants";

export default function CompetitionQuestion() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.blurContainer}>

                    <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, }}>Setting up for signal sets</Text>
                        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 9, }}> +50 points</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <Image source={require("../../../assets/profile/profile1.png")} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Poppins-Normal", fontSize: 11 }}>
                                Nicholas Ong
                            </Text>
                            <Text style={{ fontFamily: "Poppins-Normal", fontSize: 10 }}>
                                Sergeant
                            </Text>
                        </View>
                    </View>
                </View>
                <Image source={require("../../../assets/course/java.jpg")} style={{ width: "100%", height: "100%", borderRadius: 14 }} />
            </View>
            <View style={styles.restContainer}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <Text style={{ fontFamily: "Poppins-SemiBold", color: MAIN_THEME.COLOR.GREEN }}>
                        0:05
                    </Text>
                    <View style={{ width: "80%" }}>
                        <View
                            style={{
                                width: "100%",
                                height: 4,
                                borderRadius: 9,
                                backgroundColor: '#e8e8e8',
                            }}
                        >
                            <View
                                style={{
                                    width: '40%',
                                    height: '100%',
                                    backgroundColor: '#91B48C',
                                }}
                            />
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20, marginTop: 20 }}>
                    Add question here...
                </Text>

                <TouchableOpacity containerStyle={{ borderRadius: 14, marginTop: 20, alignItems: "center", paddingVertical: 10, width: "100%", justifyContent: "center", borderWidth: 1 }}>
                    <Text style={{ fontFamily: "Poppins-Normal", fontSize: 15 }}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity containerStyle={{ borderRadius: 14, marginTop: 20, alignItems: "center", paddingVertical: 10, width: "100%", justifyContent: "center", borderWidth: 1 }}>
                    <Text style={{ fontFamily: "Poppins-Normal", fontSize: 15 }}>
                        No
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity containerStyle={{ marginTop: 60, backgroundColor: MAIN_THEME.COLOR.GREEN, borderRadius: 14, alignItems: "center", paddingVertical: 10, width: "100%", justifyContent: "center", }}>
                    <Text style={{ fontFamily: "Poppins-Normal", fontSize: 15, color: "white" }}>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        width: "100%",
        height: "30%",
        alignItems: "center"
    },
    blurContainer: {
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
        zIndex: 1000,
        width: "90%",
        backgroundColor: "#F4F4F4",
        padding: 10,
        borderRadius: 10
        // alignItems:"center",

    },
    timerContainer: {

    },
    restContainer: {
        padding: 40,
        width: "100%",
        alignItems: "center"
    }
})

