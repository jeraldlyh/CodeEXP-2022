import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from "@react-navigation/elements";
import CompetitionHome from "./competition";
import CourseHome from "./courseHome";
import Header from "../../common/components/header";
import IndividualCourse from "./detail/individualCourse";
import Lesson from "./detail/lesson";
import CompetitionQuestion from "./competition/components/competitionQuestion";

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
                name="CourseDetail"
                component={IndividualCourse}
                options={{ title: "Course Detail" }}
            />
            <Course.Screen name="Lesson" component={Lesson} />
            <Course.Screen
                name="CompetitionHome"
                component={CompetitionHome}
                options={{ title: "Competition" }}
            />
            <Course.Screen name="CompetitionQuestion" component={CompetitionQuestion}/>
        </Course.Navigator>
    );
};

export default CourseStack;
