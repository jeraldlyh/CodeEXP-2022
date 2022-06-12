import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Root = createStackNavigator();

const Test = () => <Text></Text>;
const RootStack = () => {
    return (
        <Root.Navigator screenOptions={{ headerShown: false }}>
            <Root.Screen name="test" component={Test} />
        </Root.Navigator>
    );
};

export default RootStack;
