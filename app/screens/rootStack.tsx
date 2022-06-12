import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { useAuth } from "../providers/auth";
import AuthStack from "./auth/authStack";

const Root = createStackNavigator();

const RootStack = () => {
    const { user } = useAuth();

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <View></View>
            ) : (
                <Root.Screen name="Auth" component={AuthStack} />
            )}
        </Root.Navigator>
    );
};

export default RootStack;
