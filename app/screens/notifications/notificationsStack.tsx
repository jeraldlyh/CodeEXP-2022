import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationsPage from "./components/notificationsPage";
import Header from "../../common/components/header";
import { getHeaderTitle } from "@react-navigation/elements";

const Notifications = createStackNavigator();

const NotificationsStack = () => {
    return (
        <Notifications.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header navigation={navigation} title={title} />;
                },
            }}
        >
            <Notifications.Screen
                name="RootNotifications"
                component={NotificationsPage}
                options={{
                    title: "Notifications",
                }}
            />
        </Notifications.Navigator>
    );
};

export default NotificationsStack;
