import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/base";

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" type="ionicon" color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: "flex-start",
        marginBottom: 29,
    },
    button: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9999,
    },
});

export default BackButton;
