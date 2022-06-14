import { StatusBar } from "expo-status-bar";
import { PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
import { DAYS_OF_WEEKS, MAIN_THEME } from "../../../common/constants";
import { Icon } from "@rneui/base";
import Container from "../../../common/components/container";

export default function HomePage() {
    const renderDates = () => {
        let today = moment();
        let start = moment().add(-3, "day");
        const DAYS_TO_RENDER = 7;
        const elements = [];

        for (let i = 0; i < DAYS_TO_RENDER; i++) {
            const isToday = start.isSame(today);

            elements.push(
                <View
                    style={{
                        ...styles.date,
                        ...(isToday && {
                            borderRadius: 10,
                            backgroundColor: "#EFF1FC",
                        }),
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins-Bold",
                            fontSize: 18,
                            ...(isToday && { color: MAIN_THEME.COLOR.GREEN }),
                        }}
                    >
                        {start.date()}
                    </Text>
                    <Text
                        style={{
                            color: MAIN_THEME.COLOR.DARK_BLUE,
                            ...(isToday && {
                                color: MAIN_THEME.COLOR.GREEN,
                                fontFamily: "Poppins-SemiBold",
                            }),
                        }}
                    >
                        {DAYS_OF_WEEKS[start.day()].substring(0, 3)}
                    </Text>
                </View>
            );
            start = start.add(1, "day");
        }

        return elements;
    };
    return (
        <Container scrollable>
            <View style={styles.header}>
                <Text
                    style={{ color: MAIN_THEME.COLOR.DARK_BLUE, fontSize: 16 }}
                >
                    {moment().format("MMM DD, YYYY")}
                </Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 30 }}>
                    Today
                </Text>
            </View>
            <View style={styles.dateContainter}>{renderDates()}</View>
            <View style={styles.todaySchedule}>
                <Text style={styles.subTitle}>Today's Schedule</Text>
                <View style={styles.timeBlock}>
                    <Text>09:00</Text>
                    <View
                        style={{
                            borderRadius: 9999,
                            width: 10,
                            height: 10,
                            backgroundColor: MAIN_THEME.COLOR.GREEN,
                            marginLeft: 10,
                        }}
                    />
                    <View
                        style={{
                            borderRadius: 36,
                            backgroundColor: MAIN_THEME.COLOR.GREEN,
                            width: "75%",
                            height: 2,
                            overflow: "hidden",
                        }}
                    />
                    <View
                        style={{
                            borderRadius: 9999,
                            width: 10,
                            height: 10,
                            backgroundColor: MAIN_THEME.COLOR.GREEN,
                        }}
                    />
                </View>
                <View style={styles.timeBlock}>
                    <Text>10:00</Text>
                </View>
                <View style={styles.timeBlock}>
                    <Text>11:00</Text>
                </View>
            </View>
            <Text style={{ ...styles.subTitle, marginTop: 30 }}>
                Upcoming Schedule
            </Text>
            <View style={styles.upcomingSchedule}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Text style={{ ...styles.subTitle, flex: 1 }}>
                        Reservist
                    </Text>
                    <Icon
                        name="document-outline"
                        style={styles.iconStyle}
                        type="ionicon"
                        iconStyle={{ color: MAIN_THEME.COLOR.GREEN }}
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                    }}
                >
                    <Icon
                        name="location"
                        type="ionicon"
                        style={styles.iconStyle}
                        iconStyle={{ color: MAIN_THEME.COLOR.GREEN }}
                        size={36}
                    />
                    <Text
                        style={{
                            fontFamily: "Poppins-Normal",
                            marginLeft: 10,
                            maxWidth: "30%",
                        }}
                    >
                        Tekong Camp School 4
                    </Text>
                    <Text></Text>
                </View>
                <View style={styles.nextEvent}>
                    <Text style={{ fontWeight: "bold" }}>
                        Sunday,14 Aug 2022
                    </Text>
                    <Text>14:00-15:00</Text>
                </View>
            </View>
            <View style={styles.weatherContainer}>
                <Text style={{ fontWeight: "bold" }}>Tekong</Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>28°</Text>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    iconStyle: {
        backgroundColor: MAIN_THEME.COLOR.LIGHT_GREEN,
        borderRadius: 14,
        padding: 5,
    },
    subTitle: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    header: {
        width: "100%",
        flexDirection: "column",
        marginTop: 15,
    },
    dateContainter: {
        width: "100%",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
    },
    todaySchedule: {
        width: "100%",
        marginTop: 30,
    },
    timeBlock: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 20,
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderRadius: 10,
    },
    upcomingSchedule: {
        marginTop: 20,
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
        marginTop: 10,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#f5faff",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    weatherContainer: {
        marginTop: 10,
        padding: 10,
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
});
