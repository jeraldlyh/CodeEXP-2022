import { ScrollView, StyleSheet, View } from "react-native";

type TContainerProps = {
    children: React.ReactNode;
    scrollable?: boolean;
};

const Container = ({ children, scrollable }: TContainerProps) => {
    if (scrollable) {
        return <ScrollView style={styles.container}>{children}</ScrollView>;
    }

    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
        backgroundColor: "white"
    },
});

export default Container;
