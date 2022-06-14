import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import CompetitionHome from "./competition";
import CourseHome from "./courseHome";
import Header from "../../common/components/header";

const Course = createStackNavigator();

const CourseStack = () => {
    return (
        <Course.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header navigation={navigation} title={title} />;
                },
            }}
        >
            <Course.Screen
                name="CourseHome"
                component={CourseHome}
                options={{ title: "Course" }}
            />
            <Course.Screen
                name="CompetitionHome"
                component={CompetitionHome}
                options={{ title: "Competition" }}
            />
        </Course.Navigator>
    );
};

export default CourseStack;
