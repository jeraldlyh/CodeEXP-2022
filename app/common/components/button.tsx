import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

type TButtonProps = {
    backgroundColor: string;
    textColor: string;
    children: string | React.ReactNode;
    onPress: () => void;
    height: number;
    width: number;
};

const Button = ({
    backgroundColor,
    textColor,
    onPress,
    children,
    height,
    width,
}: TButtonProps) => {
    const styles = StyleSheet.create({
        background: {
            backgroundColor: `${backgroundColor}`,
            borderRadius: 14,
            height,
            width,
        },
        text: {
            fontFamily: "Poppins-Bold",
            color: `${textColor}`,
            fontSize: 17,
        },
        buttonWrapper: {
            width: "100%",
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
        },
    });

    return (
        <View style={styles.background}>
            <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
                <View style={styles.buttonContainer}>
                    {typeof children === "string" ? (
                        <Text style={[styles.text]}>{children}</Text>
                    ) : (
                        children
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
