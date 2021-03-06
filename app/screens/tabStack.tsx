import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import { getHeaderTitle } from "@react-navigation/elements";
import HomeStack from "./home/homeStack";
import Header from "../common/components/header";
import CourseStack from "./course/courseStack";
import ProfileStack from "./profile/profileStack";
import HazardStack from "./hazard/hazardStack";
import NotificationsStack from "./notifications/notificationsStack";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    const WHITELIST_ROUTES = ["Home"];

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
                    } else if (route.name === "Notif") {
                        iconName = focused
                            ? "notifications"
                            : "notifications-outline";
                    } else if (route.name === "Hazard") {
                        iconName = focused ? "skull" : "skull-outline";
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
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    if (WHITELIST_ROUTES.includes(title)) {
                        return <Header navigation={navigation} title={title} />;
                    }
                    return null;
                },
                headerShown:false,
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Notifications" component={NotificationsStack} />
            <Tab.Screen name="Courses" component={CourseStack} />
            <Tab.Screen name="Hazard" component={HazardStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
};

export default TabStack;
