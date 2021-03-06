import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./welcomeScreen";
import LoginScreen from "./loginScreen";

const Auth = createStackNavigator();

const AuthStack = () => {
    return (
        <Auth.Navigator screenOptions={{ headerShown: false }}>
            <Auth.Screen name="Welcome" component={WelcomeScreen} />
            <Auth.Screen name="Login" component={LoginScreen} />
        </Auth.Navigator>
    );
};

export default AuthStack;
