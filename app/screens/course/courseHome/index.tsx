import { StyleSheet, View, Text, ScrollView } from "react-native";
import random from "lodash/random";
import Container from "../../../common/components/container";
import { MAIN_THEME } from "../../../common/constants";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";

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
                    <View style={styles.cardContainer}></View>
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
    },
    cardContainer: {
        width: "100%",
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
});

export default CourseHome;
