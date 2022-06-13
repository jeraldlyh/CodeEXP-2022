import { StatusBar } from 'expo-status-bar';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MAIN_THEME_COLOR } from "./common/constants";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from '@rneui/base';


export default function WeatherPage() {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Icon name="arrow-left" size={30}/>
            </View>
            <View style={styles.header}>
                <Text style={{ color: MAIN_THEME_COLOR.GREEN, fontFamily: "Poppins-SemiBold", fontSize: 25 }}>Tekong</Text>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 50 }}>28°</Text>
                <Text style={{ color: "grey", fontFamily: "Poppins-Normal" }}>Mostly Cloudy</Text>
                <Text style={{ color: "grey", fontFamily: "Poppins-Normal" }}>H: 29° L: 26°</Text>
            </View>
            <View style={styles.searchbox}>
                <TextInput placeholder='Search For A Location' />
            </View>
            <View style={styles.weatherBlock}>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>12pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>1pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>2pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>3pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>4pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>
                <View style={styles.individualWeather}>
                    <Text style={{ fontSize: 10, color: "grey" }}>5pm</Text>
                    <Icon name="weather-cloudy" size={30} color="#52B6DF" />
                    <Text style={{ fontSize: 10, color: "grey" }}>29°</Text>
                </View>

            </View>
            <View style={styles.tenDayForecastContainer}>
                <Text style={{ marginTop: 20, fontFamily: "Poppins-SemiBold", fontSize: 16 }}>10 Day forecast</Text>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Today</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Mon</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Tues</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Wed</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Thu</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Fri</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Sat</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
                <View style={styles.dailyForecastBlock}>
                    <Text style={{ width: "15%", fontFamily: "Poppins-Normal", fontSize: 15 }}>Sun</Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Icon name="weather-rainy" size={20} color="#52B6DF" />
                        <Text style={{ fontFamily: "Poppins-Normal", fontSize: 8 }} >50%</Text>
                    </View>

                    <Text>26°</Text>
                    <View style={{ width: "50%" }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    width: 150,
                                    height: 3,
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
                    <Text>29°</Text>

                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: "100%",
        paddingVertical: 50,
        paddingHorizontal: 20,

        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "justify"
    },
    searchbox: {
        width: "100%",
        marginTop: 10,
        backgroundColor: "#f4f4f4",
        padding: 20,
        borderRadius: 20
    },
    weatherBlock: {
        marginTop: 10,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: '#fff',

    },
    individualWeather: {
        flexDirection: "column",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 5
    },
    tenDayForecastContainer: {
        width: "100%"
    },
    dailyForecastBlock: {
        flexDirection: "row",
        padding: 20,
        width: "100%",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-between"

    }

})
