import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import CompetitionHome from "./competition";
import CourseHome from "./courseHome";
import Header from "../../common/components/header";
import CompetitionScreen from "./competition/components/competitionScreen";

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
            <Course.Screen name="CompetitionScreen" component={CompetitionScreen}/>
        </Course.Navigator>
    );
};

export default CourseStack;
