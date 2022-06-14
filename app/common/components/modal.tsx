import React, { Fragment } from "react";
import {
    Dimensions,
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import { BlurView } from "expo-blur";
import { TModalProp } from "../../screens/course/competition/types";

const Modal = ({ body, handleDismiss }: TModalProp) => {
    const handlePress = () => {
        console.log("pressing")
        Keyboard.dismiss();
        handleDismiss();
    };

    return (
        <BlurView intensity={95} tint="light" style={styles.modalBackground}>
            <TouchableWithoutFeedback onPress={handlePress} accessible={false}>
                <Fragment>{body}</Fragment>
            </TouchableWithoutFeedback>
        </BlurView>
    );
};
const styles = StyleSheet.create({
    modalBackground: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1F2937",
        zIndex: 100,
    },
});

export default Modal;
