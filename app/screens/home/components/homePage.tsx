import { StatusBar } from 'expo-status-bar';
import { PermissionsAndroid, StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { MAIN_THEME } from '../../../common/constants';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default function HomePage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: "grey", fontFamily: "Poppins-Normal" }}>May 19,2022</Text>
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 25 }}>Today</Text>
            </View>
            <View style={styles.dateContainter}>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        16
                    </Text>
                    <Text>
                        Mo
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        17
                    </Text>
                    <Text>
                        Tu
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        18
                    </Text>
                    <Text>
                        Wed
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        19
                    </Text>
                    <Text>
                        Th
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        20
                    </Text>
                    <Text>
                        Fr
                    </Text>
                </View>
                <View style={[styles.date, { borderRadius: 10, backgroundColor: "#f5f5f5" }]}>
                    <Text style={{ fontWeight: "bold" }}>
                        21
                    </Text>
                    <Text>
                        Sa
                    </Text>
                </View>
                <View style={styles.date}>
                    <Text style={{ fontWeight: "bold" }}>
                        22
                    </Text>
                    <Text>
                        Su
                    </Text>
                </View>
            </View>
            <View style={styles.todaySchedule}>
                <Text style={{ fontWeight: "bold" }}>Today's Schedule</Text>
                <View style={[styles.timeBlock, { flexDirection: "row", alignItems: "center" }]}>
                    <Text>
                        09:00
                    </Text>
                    <View
                        style={{
                            width: "80%",
                            height: 4,
                            borderRadius: 9,
                            backgroundColor: MAIN_THEME.COLOR.GREEN,
                            marginLeft: 20
                        }}
                    >
                    </View>
                </View>
                <View style={styles.timeBlock}>
                    <Text>
                        10:00
                    </Text>
                </View>
                <View style={styles.timeBlock}>
                    <Text>
                        11:00
                    </Text>
                </View>
            </View>
            <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                Upcoming Schedule
            </Text>
            <View style={styles.upcomingSchedule}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>Reservist</Text>
                    <MaterialIcons name='description' size={20} color="#91B48C" />
                </View>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name='location-on' size={20} color="#91B48C" />
                        <View style={{ marginLeft: 10 }}>

                            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, marginTop: 10 }}>Add in some location</Text>
                            <Text style={{ fontFamily: "Poppins-Normal", fontSize: 11, }}>more details on location</Text>
                        </View>
                    </View>
                    <View style={styles.nextEvent}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialIcons name='calendar-today' size={20} color="#91B48C" />

                            <Text style={{ fontFamily: "Poppins-Bold", marginLeft: 10, fontSize: 12 }}>Sunday,14 Aug 2022</Text>

                        </View>
                        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, }}>14:00-15:00</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherContainer}>
                <Text style={{ fontWeight: "bold", }}>Tekong</Text>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>28°</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                    <SingleWeather day={12} temp={28} />
                    <SingleWeather day={1} temp={28} />

                    <SingleWeather day={2} temp={28} />

                    <SingleWeather day={3} temp={28} />

                    <SingleWeather day={4} temp={28} />

                    <SingleWeather day={5} temp={28} />

                </View>
            </View>
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, marginTop: 20 }}>
                Hazard Reporting
            </Text>
            <View style={styles.hazardReporting}>
                <Image source={require("../../../assets/hazard/hazard.png")} style={{ width: "10%", height: 40 }}></Image>
                <Text style={{ fontFamily: "Poppins-Normal", fontSize: 11, width: "40%" }}>
                    You are currently not in
                    or near any hazard zone
                </Text>
                <TouchableOpacity containerStyle={{ width: "40%", backgroundColor: MAIN_THEME.COLOR.GREEN, alignItems: "center", padding: 5, borderRadius: 8 }}>
                    <Text style={{ color: "white", fontFamily: "Poppins-Normal" }}>
                        Report hazard
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, marginTop: 20 }}>
                Self-regulated trainings
            </Text>
            <View style={[styles.hazardReporting, { flexDirection: "column" }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>

                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 13 }}>
                        Exercise and earn points
                    </Text>
                    <TouchableOpacity containerStyle={{ backgroundColor: MAIN_THEME.COLOR.GREEN, alignItems: "center", padding: 5, borderRadius: 8, width: "40%" }}>
                        <Text style={{ color: "white", fontFamily: "Poppins-Normal" }}>
                            Create Training
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: 10, fontFamily: "Poppins-Normal", fontSize: 11, alignSelf: "flex-start" }}>
                    Schedule self-regulated trainings here. Create or
                    join trainings to earn points and redeem benefits!
                </Text>
            </View>

            <View style={[styles.hazardReporting, { flexDirection: "column",marginTop:20 }]}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>

                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 13 }}>
                        Online training session
                    </Text>
                    <TouchableOpacity containerStyle={{ backgroundColor: MAIN_THEME.COLOR.GREEN, alignItems: "center", padding: 5, borderRadius: 8, width: "40%" }}>
                        <Text style={{ color: "white", fontFamily: "Poppins-Normal" }}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.nextEvent}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name='calendar-today' size={20} color="#91B48C" />

                        <Text style={{ fontFamily: "Poppins-Bold", marginLeft: 10, fontSize: 12 }}>Sunday,14 Aug 2022</Text>

                    </View>
                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 12, }}>14:00-15:00</Text>
                </View>

            </View>
        </ScrollView>
    );
}

type dayProps = {
    day: number,
    temp: number
}
const SingleWeather = (props: dayProps) => {
    return (
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ fontFamily: "Poppins-Normal", fontSize: 10 }}>
                {props.day}pm
            </Text>
            <MaterialIcons name='cloud' size={20} color="#52B6DF" />
            <Text style={{ fontFamily: "Poppins-Normal", fontSize: 10 }}>
                {props.temp}°
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 30,
        // alignItems: "center",
        backgroundColor: "#FFF",
    },
    header: {
        width: "100%",
        flexDirection: "column"
    },
    dateContainter: {
        width: "100%",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    date: {
        flexDirection: "column",
        padding: 10
    },
    todaySchedule: {
        width: "100%",
        marginTop: 20
    },
    timeBlock: {
        marginTop: 10,
        padding: 20,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 10
    },
    upcomingSchedule: {
        marginTop: 10,
        padding: 20,
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        backgroundColor: '#fff',
        flexDirection: "column",
    },
    nextEvent: {
        marginTop: 10,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#F3FBF4",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    weatherContainer: {
        marginTop: 10,
        padding: 15,
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        backgroundColor: '#fff',
        flexDirection: "column",
    },
    hazardReporting: {
        padding: 10,
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: '#fff',
    }

});
