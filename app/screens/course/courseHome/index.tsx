import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import random from "lodash/random";
import Container from "../../../common/components/container";
import { MAIN_THEME } from "../../../common/constants";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";
import { cybersecurityImage } from "../../../assets/courses";
import ProgressBar from "../../../common/components/progressBar";

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
                        <View key={index} style={styles.cardContainer}>
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>
                                    {course.title}
                                </Text>
                                <Text style={styles.cardDescription}>
                                    {course.numerator}/{course.denominator}{" "}
                                    topics completed
                                </Text>
                                <ProgressBar
                                    numerator={course.numerator}
                                    denominator={course.denominator}
                                />
                            </View>
                            <Image
                                source={cybersecurityImage}
                                style={{ alignSelf: "flex-end" }}
                            />
                        </View>
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
    cardTextContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 16,
        alignItems:"flex-start",
        minWidth: 210,
        maxWidth: 210,
    },
    cardTitle: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    cardDescription: {
        fontFamily: "Poppins-Normal",
        marginVertical: 5,
    },
});

export default CourseHome;
