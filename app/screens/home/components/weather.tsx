import { StyleSheet, Text, View } from "react-native";

const WeatherPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: "grey" }}>May 19,2022</Text>
                <Text style={{ fontWeight: "bold" }}>Today</Text>
            </View>
            <View style={styles.dateContainter}>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>16</Text>
                    <Text>Mo</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>17</Text>
                    <Text>Tu</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>18</Text>
                    <Text>Wed</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>19</Text>
                    <Text>Th</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>20</Text>
                    <Text>Fr</Text>
                </View>
                <View
                    style={[
                        styles.date,
                        { borderRadius: 10, backgroundColor: "#f5f5f5" },
                    ]}
                >
                    <Text style={{ fontWeight: "bold" }}>21</Text>
                    <Text>Sa</Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>22</Text>
                    <Text>Su</Text>
                </View>
            </View>
            <View style={styles.todaySchedule}>
                <Text style={{ fontWeight: "bold" }}>Today's Schedule</Text>
                <View style={styles.timeBlock}>
                    <Text>09:00</Text>
                </View>
                <View style={styles.timeBlock}>
                    <Text>10:00</Text>
                </View>
                <View style={styles.timeBlock}>
                    <Text>11:00</Text>
                </View>
            </View>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                Upcoming Schedule
            </Text>
            <View style={styles.upcomingSchedule}>
                <Text style={{ fontWeight: "bold" }}>Reservist</Text>
                <View>
                    <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                        Add in some location
                    </Text>
                    <Text>more details on location</Text>
                    <View style={styles.nextEvent}>
                        <Text style={{ fontWeight: "bold" }}>
                            Sunday,14 Aug 2022
                        </Text>
                        <Text>14:00-15:00</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherContainer}>
                <Text style={{ fontWeight: "bold" }}>Tekong</Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>28°</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        width: "100%",
        flexDirection: "column",
    },
    dateContainter: {
        width: "100%",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    date: {
        flexDirection: "column",
        padding: 10,
    },
    todaySchedule: {
        width: "100%",
        marginTop: 20,
    },
    timeBlock: {
        marginTop: 10,
        padding: 20,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
    },
    upcomingSchedule: {
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

export default WeatherPage;
