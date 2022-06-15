import React, { Fragment } from "react";
import { cybersecurityImage } from "../../../../assets/courses";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { random } from "lodash";
import { MAIN_THEME } from "../../../../common/constants";
import ProgressBar from "../../../../common/components/progressBar";
import Card from "../../../../common/components/card";

type TCourseCardBodyProps = {
    numerator: number;
    denominator: number;
};

const CourseCardBody = ({ numerator, denominator }: TCourseCardBodyProps) => {
    return (
        <Fragment>
            <Text style={styles.cardDescription}>
                {numerator}/{denominator} topics completed
            </Text>
            <ProgressBar numerator={numerator} denominator={denominator} />
            <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Continue course</Text>
            </TouchableOpacity>
        </Fragment>
    );
};

const SuggestedCourses = () => {
    const SUGGESTED_COURSES = [
        {
            title: "Army Safety System",
            numerator: random(0, 25),
            denominator: 25,
            buttonText: "Continue course",
        },
        {
            title: "Risk Management",
            numerator: random(0, 25),
            denominator: 25,
            buttonText: "Continue course",
        },
    ];

    return (
        <View style={styles.suggestedCoursesContainer}>
            <Text style={styles.suggestedCourseText}>Suggested courses</Text>
            <ScrollView>
                {SUGGESTED_COURSES.map((course, index) => (
                    <Card
                        key={index}
                        title={course.title}
                        body={
                            <CourseCardBody
                                numerator={course.numerator}
                                denominator={course.denominator}
                            />
                        }
                        imageSrc={require("../../../../assets/recap-1.jpg")}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    suggestedCoursesContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 23,
    },
    suggestedCourseText: {
        fontFamily: "Poppins-Bold",
        fontSize: MAIN_THEME.FONT_SIZE.SUB_TITLE,
        marginBottom: 8,
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: MAIN_THEME.COLOR.CARD,
        minHeight: 120,
        marginBottom: 10,
        justifyContent: "space-between",
    },
    cardDescription: {
        fontFamily: "Poppins-Normal",
        marginVertical: 5,
    },
    cardButton: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#F0F0F0",
        borderRadius: 7,
    },
    cardButtonText: {
        color: MAIN_THEME.COLOR.GREEN,
    },
});

export default SuggestedCourses;
