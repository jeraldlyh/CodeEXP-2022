import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { MAIN_THEME } from "../../../common/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from '@rneui/base';
import React from 'react';

type HourlyWeatherProps = {
    time: string;
    temperature: number;
};

const HourlyWeather = (props: HourlyWeatherProps) => {
    return (
        <View style={styles.individualWeather}>
            <Text style={styles.hourlyWeatherTime}>{props.time}</Text>
            <Icon name="weather-cloudy" size={30} color="#52B6DF" />
            <Text style={styles.hourlyWeatherTemperature}>
                {props.temperature}°
            </Text>
        </View>
    );
};

type DailyForecastProps = {
    day: string;
    chanceOfRain: string;
    temperature: number;
    divide: string;
};

const DailyForecast = (props: DailyForecastProps) => {
    return (
        <View style={styles.dailyForecastBlock}>
            <Text style={styles.DailyForecastDay}>{props.day}</Text>
            <View style={styles.DailyForecastWeather}>
                <Icon name="weather-rainy" size={25} color="#52B6DF" />
                <Text style={styles.DailyForecastChanceOfRain}>
                    {props.chanceOfRain}
                </Text>
            </View>

            <Text>{props.temperature}°</Text>
            <View style={{ width: "25%" }}>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <View style={styles.DailyForecastDivide}>
                        <View
                            style={{
                                width: props.divide,
                                height: "100%",
                                backgroundColor: "#91B48C",
                            }}
                        />
                    </View>
                </View>
            </View>
            <Text>29°</Text>
        </View>
    );
};
export default function WeatherPage() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.location}>Tekong</Text>
                <Text style={styles.temperature}>28°</Text>
                <Text style={styles.weather}>Mostly Cloudy</Text>
                <Text style={styles.temperatureRange}>H: 29° L: 26°</Text>
            </View>
            <View style={styles.searchbox}>
                <Icon name="magnify" size={20} color="grey" />
                <TextInput
                    style={{ marginLeft: 10 }}
                    placeholder="Search For A Location"
                />
            </View>
            <View style={styles.weatherBlock}>
                <HourlyWeather time="12pm" temperature={29} />
                <HourlyWeather time="1pm" temperature={29} />
                <HourlyWeather time="2pm" temperature={30} />
                <HourlyWeather time="3pm" temperature={28} />
                <HourlyWeather time="4pm" temperature={28} />
                <HourlyWeather time="5pm" temperature={29} />
            </View>
            <View style={styles.tenDayForecastContainer}>
                <Text
                    style={{
                        marginTop: 20,
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 16,
                    }}
                >
                    10 Day forecast
                </Text>
                <DailyForecast
                    day="Today"
                    chanceOfRain="50%"
                    temperature={26}
                    divide="50%"
                />
                <DailyForecast
                    day="Mon"
                    chanceOfRain="40%"
                    temperature={27}
                    divide="30%"
                />
                <DailyForecast
                    day="Tues"
                    chanceOfRain="50%"
                    temperature={28}
                    divide="40%"
                />
                <DailyForecast
                    day="Wed"
                    chanceOfRain="70%"
                    temperature={26}
                    divide="60%"
                />
                <DailyForecast
                    day="Thu"
                    chanceOfRain="34%"
                    temperature={26}
                    divide="50%"
                />
                <DailyForecast
                    day="Fri"
                    chanceOfRain="40%"
                    temperature={28}
                    divide="20%"
                />
                <DailyForecast
                    day="Sat"
                    chanceOfRain="16%"
                    temperature={30}
                    divide="40%"
                />
                <DailyForecast
                    day="Sun"
                    chanceOfRain="20%"
                    temperature={32}
                    divide="45%"
                />
                <DailyForecast
                    day="Mon"
                    chanceOfRain="10%"
                    temperature={29}
                    divide="70%"
                />
                <DailyForecast
                    day="Tue"
                    chanceOfRain="15%"
                    temperature={29}
                    divide="50%"
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    header: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "justify",
    },
    location: {
        color: MAIN_THEME.COLOR.GREEN,
        fontFamily: "Poppins-SemiBold",
        fontSize: 28,
    },
    temperature: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 55,
    },
    weather: {
        fontSize: 17,
        color: "grey",
        fontFamily: "Poppins-Normal",
    },
    temperatureRange: {
        fontSize: 17,
        color: "grey",
        fontFamily: "Poppins-Normal",
    },
    hourlyWeatherTime: {
        fontSize: 13,
        color: MAIN_THEME.COLOR.GREEN,
    },
    hourlyWeatherTemperature: {
        fontSize: 13,
        color: "grey",
    },
    searchbox: {
        width: "100%",
        marginTop: 10,
        backgroundColor: "#f4f4f4",
        padding: 20,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
    },
    weatherBlock: {
        marginVertical: 20,
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
        backgroundColor: "#fff",
    },
    individualWeather: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    tenDayForecastContainer: {
        width: "100%",
    },
    dailyForecastBlock: {
        flexDirection: "row",
        padding: 17,
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
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
    },
    DailyForecastDay: {
        width: "15%",
        fontFamily: "Poppins-Normal",
        fontSize: 15,
    },
    DailyForecastWeather: {
        alignItems: "center",
        justifyContent: "center",
    },
    DailyForecastChanceOfRain: {
        fontFamily: "Poppins-Normal",
        fontSize: 12,
    },
    DailyForecastDivide: {
        width: 110,
        height: 3,
        borderRadius: 9,
        backgroundColor: "#e8e8e8",
    },
});
