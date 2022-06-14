import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HazardReportingPage from "./hazardReporting";
import HazardHomepage from "./hazardHome";
import SafetyConcernsPage from "./safetyConcerns";
import NearMissPage from "./nearMiss";
import Header from "../../common/components/header";
import { getHeaderTitle } from "@react-navigation/elements";

const Hazard = createStackNavigator();

const HazardStack = () => {
    return (
        <Hazard.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header navigation={navigation} title={title} />;
                },
            }}
        >
            <Hazard.Screen name="Open Report" component={HazardHomepage} />
            <Hazard.Screen
                name="Safety Concern"
                component={SafetyConcernsPage}
            />
            <Hazard.Screen
                name="Hazard Reporting"
                component={HazardReportingPage}
            />
            <Hazard.Screen name="Near Miss" component={NearMissPage} />
        </Hazard.Navigator>
    );
};

export default HazardStack;
