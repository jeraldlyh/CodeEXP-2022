import { StyleSheet, Text, SafeAreaView } from "react-native";
import BackButton from "./backButton";

type THeaderProps = {
    title: string;
};

const Header = ({ title }: THeaderProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <BackButton style={styles.backButton} />
            <Text style={styles.titleText}>{title}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    titleText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 25,
        textAlign: "center",
        flex: 1,
        marginRight: 15,    // TODO: Not true center
    },
    backButton: {
        left: 26,
        color: "black"
    }
});

export default Header;
