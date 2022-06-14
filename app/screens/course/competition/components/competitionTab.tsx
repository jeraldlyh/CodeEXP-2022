import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import CompetitionList from "./competitionList";

const CompetitionTab = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "Beginner", title: "Beginner" },
        { key: "Intermediate", title: "Intermediate" },
        { key: "Advanced", title: "Advanced" },
    ]);

    const navigation = useNavigation();
    const renderScene = ({ route }: any) => {
        switch (route.key) {
            case "Beginner":
                return (
                    <CompetitionList navigation={navigation} difficulty={route.key} />
                );
            default:
                return;
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            style={{ overflow: "scroll" }}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    style={styles.tabBar}
                    indicatorStyle={styles.tabBarIndicator}
                    renderLabel={({ route, focused, color }) => (
                        <Text numberOfLines={1} style={styles.tabBarText}>
                            {route.title}
                        </Text>
                    )}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "transparent",
        paddingHorizontal: -26,
        width: "100%",
    },
    tabBarText: {
        fontFamily: "Poppins-Bold",
        textTransform: "uppercase",
        color: "black",
    },
    tabBarIndicator: {
        backgroundColor: "grey",
    },
});

export default CompetitionTab;
