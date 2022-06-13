import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherPage from "./components/weather";
import HazardHomepage from "../hazard/hazardHome";
import HazardReportingPage from "../hazard/hazardReporting";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Weather" component={WeatherPage} />
        </Home.Navigator>
    )
}

export default HomeStack;