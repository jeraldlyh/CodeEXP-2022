import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfilePage from "./profilePage";
import SettingsPage from "./settings";

const Profile = createStackNavigator();

const ProfileStack = () => {
    return (
        <Profile.Navigator screenOptions={{ headerShown: false }}>
            <Profile.Screen name="Profile" component={ProfilePage} />
            <Profile.Screen name="Settings" component={SettingsPage} />
        </Profile.Navigator>
    );
};

export default ProfileStack;
