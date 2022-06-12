import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../providers/auth";
import AuthStack from "./auth/authStack";
import TabStack from "./tabStack";

const Root = createStackNavigator();

const RootStack = () => {
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        console.log(isLoggedIn);
    }, [isLoggedIn]);

    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Root.Screen name="Tab" component={TabStack} />
            ) : (
                <Root.Screen name="Auth" component={AuthStack} />
            )}
        </Root.Navigator>
    );
};

export default RootStack;
