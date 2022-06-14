import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationsPage from "./notificationsPage";

const Notifications = createStackNavigator();

const NotificationsStack = () => {
    return (
        <Notifications.Navigator screenOptions={{ headerShown: false }}>
            <Notifications.Screen
                name="Notifications"
                component={NotificationsPage}
            />
        </Notifications.Navigator>
    );
};

export default NotificationsStack;
