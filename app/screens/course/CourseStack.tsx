import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CourseHome from "./CourseHome";
import Lesson from "./Lesson";
import IndividualCourse from "./IndividualCourse";

const Course = createStackNavigator();

const CourseStack = () => {
    return (
        <Course.Navigator screenOptions={{ headerShown: false }}>
            <Course.Screen name="CourseHome" component={CourseHome} />
            <Course.Screen name="Java" component={IndividualCourse} />
            <Course.Screen name="Lesson" component={Lesson} />
        </Course.Navigator>
    )
}

export default CourseStack;