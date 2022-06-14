import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "./components/profilePage";
import SettingsPage from "./components/settings";
import Header from "../../common/components/header";
import { getHeaderTitle } from "@react-navigation/elements";

const Profile = createStackNavigator();

const ProfileStack = () => {
    return (
        <Profile.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header navigation={navigation} title={title} />;
                },
            }}
        >
            <Profile.Screen name="Profile" component={ProfilePage} />
            <Profile.Screen name="Settings" component={SettingsPage} />
        </Profile.Navigator>
    );
};

export default ProfileStack;
