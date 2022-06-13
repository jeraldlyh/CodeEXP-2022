import { StyleSheet, View } from "react-native";

type TContainerProps = {
    children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 26,
    },
});

export default Container;
