import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HazardReportingPage from "./hazardReporting";
import HazardHomepage from "./hazardHome";
import SafetyConcernsPage from "./safetyConcerns";
import NearMissPage from "./nearMiss";

const Hazard = createStackNavigator();

const HazardStack = () => {
    return (
        <Hazard.Navigator screenOptions={{ headerShown: false }}>
            <Hazard.Screen name="HazardHomepage" component={HazardHomepage} />
            <Hazard.Screen
                name="SafetyConcern"
                component={SafetyConcernsPage}
            />
            <Hazard.Screen
                name="HazardReporting"
                component={HazardReportingPage}
            />
            <Hazard.Screen name="NearMiss" component={NearMissPage} />
        </Hazard.Navigator>
    );
};

export default HazardStack;
