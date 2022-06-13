import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Icon } from "@rneui/base";
import { MAIN_THEME } from "../../../../common/constants";

const Categories = () => {
    const CATEGORY_DATA = [
        {
            category: "Signals",
            icon: "signal",
            color: "red",
            type: "font-awesome",
        },
        { category: "Armour", icon: "car", type: "font-awesome" },
        {
            category: "Guards",
            icon: "dingding",
            color: "green",
            type: "ant-design",
        },
    ];

    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryHeaderContainer}>
                <Text style={styles.categoryText}>Categories</Text>
                <Text style={styles.seeAllText}>See all</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 4 }}
            >
                {CATEGORY_DATA.map((data) => (
                    <View style={styles.categoryCard}>
                        <Icon
                            name={data.icon}
                            type={data.type}
                            color={data.color ? data.color : "black"}
                        />
                        <Text style={styles.categoryCardText}>
                            {data.category}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        display: "flex",
        flexDirection: "column",
        marginTop: 22,
    },
    categoryHeaderContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    categoryText: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
    },
    seeAllText: {
        fontFamily: "Poppins-SemiBold",
        color: "#AEAEBF",
        alignSelf: "flex-end",
        fontSize: 15,
    },
    categoryCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        minHeight: 104,
        minWidth: 95,
        backgroundColor: MAIN_THEME.COLOR.CARD,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        marginRight: 25,
    },
    categoryCardText: {
        marginTop: 5,
        fontFamily: "Poppins-Bold",
    },
});

export default Categories;
