import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import HomeStack from "./home/homeStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                lazy: false,
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Compete") {
                        iconName = focused ? "trophy" : "trophy-outline";
                    } else if (route.name === "Notifs") {
                        iconName = focused
                            ? "notifications"
                            : "notifications-outline";
                    } else {
                        iconName = focused ? "person" : "person-outline";
                    }

                    return <Icon name={iconName} type="ionicon" />;
                },
                tabBarLabelStyle: {
                    fontFamily: "Poppins-Bold",
                },
                tabBarActiveTintColor: "#2B2B2B",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
        </Tab.Navigator>
    );
};

export default TabStack;
