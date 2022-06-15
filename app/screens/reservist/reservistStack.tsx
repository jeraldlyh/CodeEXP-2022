import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../../common/components/header";
import { getHeaderTitle } from "@react-navigation/elements";
import ReservistPage from "./components/reservist";
import CourseStack from "../course/courseStack";

const Reservist = createStackNavigator();

const ReservistStack = () => {
    return (
        <Reservist.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header navigation={navigation} title={title} />;
                },
            }}
        >
            <Reservist.Screen
                name="RootReservist"
                component={ReservistPage}
                options={{
                    title: "Reservist",
                }}
            />
            <Reservist.Screen
                name="CourseStackRedirect"
                component={CourseStack}
                options={{headerShown:false}}
            />
        </Reservist.Navigator>
    );
};

export default ReservistStack;
