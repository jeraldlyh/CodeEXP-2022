import { StyleSheet, View, Text, ScrollView } from "react-native";
import Container from "../../../common/components/container";
import { MAIN_THEME } from "../../../common/constants";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";

const CourseHome = () => {
    return (
        <Container>
            <BattleCard />
            <Categories />
            <View></View>
        </Container>
    );
};

const styles = StyleSheet.create({
    suggestedCoursesContainer: {
        display: "flex",
        flexDirection: "column",
    },
    suggestedCourseText: {
        fontFamily: "Poppins-Bold",
        fontSize: MAIN_THEME.FONT_SIZE.SUB_TITLE,
    },
});

export default CourseHome;
