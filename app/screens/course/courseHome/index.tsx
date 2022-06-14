import Container from "../../../common/components/container";
import { TScreenProp } from "../../types";
import BattleCard from "./components/battleCard";
import Categories from "./components/categories";
import SuggestedCourses from "./components/suggestedCourses";

const CourseHome = ({ navigation }: TScreenProp) => {
    return (
        <Container scrollable>
            <BattleCard navigation={navigation} />
            <Categories />
            <SuggestedCourses />
        </Container>
    );
};

export default CourseHome;
