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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    titleText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 25,
        textAlign: "center",
        flex: 1,
    },
    backButton: {
        left: 26,
        color: "black"
    }
});

export default Header;
