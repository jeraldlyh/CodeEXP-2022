import { Fragment } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import random from "lodash/random";
import Container from "../../../common/components/container";
import { MAIN_THEME } from "../../../common/constants";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";
import { cybersecurityImage } from "../../../assets/courses";
import ProgressBar from "../../../common/components/progressBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../../common/components/card";

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

const CourseHome = () => {
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
        <Container scrollable>
            <BattleCard />
            <Categories />
            <View style={styles.suggestedCoursesContainer}>
                <Text style={styles.suggestedCourseText}>
                    Suggested courses
                </Text>
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
                            imageSrc={cybersecurityImage}
                        />
                    ))}
                </ScrollView>
            </View>
        </Container>
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

export default CourseHome;
