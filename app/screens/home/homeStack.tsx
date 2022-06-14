import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherPage from "./components/weather";
import ReservistPage from "./components/reservist";
import HomePage from "./components/homePage";
import HazardStack from "../hazard/hazardStack";
import CreateTrainingPage from "../training/createTraining";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator screenOptions={{ headerShown: false }}>
            <Home.Screen name="Root" component={HomePage} />
            <Home.Screen name="Weather" component={WeatherPage} />
            <Home.Screen name="Reservist" component={ReservistPage} />
            <Home.Screen name="HazardStack" component={HazardStack} />
            <Home.Screen name="CreateTraining" component={CreateTrainingPage} />
        </Home.Navigator>
    );
};

export default HomeStack;
