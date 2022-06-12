import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherPage from "./components/weather";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Weather" component={WeatherPage} />
        </Home.Navigator>
    )
}

export default HomeStack;