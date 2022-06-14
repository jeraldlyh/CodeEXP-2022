import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { BlurView } from "expo-blur";
import { TModalProp } from "../../screens/course/competition/types";

const Modal = ({ isOpen, setIsOpen, children }: TModalProp) => {
    return (
        <BlurView intensity={95} style={styles.modalBackground}>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}
            >
                {children}
            </TouchableWithoutFeedback>
        </BlurView>
    );
};
const styles = StyleSheet.create({
    modalBackground: {
        position: "absolute",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1F2937",
        zIndex: 100,
    },
});

export default Modal;
