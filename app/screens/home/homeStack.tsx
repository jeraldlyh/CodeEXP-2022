import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WeatherPage from "./components/weather";
import HomePage from "./components/homePage";
import HazardStack from "../hazard/hazardStack";
import CreateTrainingPage from "../training/createTraining";
import ReservistStack from "../reservist/reservistStack";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Home.Screen name="Root" component={HomePage} />
            <Home.Screen name="Weather" component={WeatherPage} />
            <Home.Screen name="Reservist" component={ReservistStack} />
            <Home.Screen name="HazardStack" component={HazardStack} />
            <Home.Screen name="CreateTraining" component={CreateTrainingPage} />
        </Home.Navigator>
    );
};

export default HomeStack;
