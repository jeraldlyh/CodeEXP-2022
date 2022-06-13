import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import HomeStack from "./home/homeStack";
import CourseStack from "./course/courseStack";

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
                    } else if (route.name === "Courses") {
                        iconName = focused ? "clipboard" : "clipboard-outline";
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
            <Tab.Screen name="Courses" component={CourseStack} />
        </Tab.Navigator>
    );
};

export default TabStack;
