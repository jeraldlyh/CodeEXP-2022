import { StyleSheet, View, Text, ScrollView } from "react-native";
import Container from "../../../common/components/container";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";

const CourseHome = () => {
    return (
        <Container>
            <BattleCard />
            <Categories />
        </Container>
    );
};

const styles = StyleSheet.create({});

export default CourseHome;
