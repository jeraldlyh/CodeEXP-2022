import { createStackNavigator } from "@react-navigation/stack";
import { TScreenProp } from "../types";
import CompetitionHome from "./competition";
import CourseHome from "./courseHome";

const Course = createStackNavigator();

const CourseStack = () => {
    return (
        <Course.Navigator screenOptions={{ headerShown: false }}>
            <Course.Screen name="CourseHome" component={CourseHome} />
            <Course.Screen name="CompetitionHome" component={CompetitionHome} options={{title:"Competition"}}/>
        </Course.Navigator>
    );
};

export default CourseStack;
