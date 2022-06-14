import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

type TButtonProps = {
    backgroundColor: string;
    textColor: string;
    children: string | React.ReactNode;
    onPress: () => void;
    height?: number;
    width?: number;
    style?: {
        background?: any;
        text?: any;
        buttonWrapper?: any;
        buttonContainer?: any;
    }; // Overwrite default styles
};

const Button = ({
    backgroundColor,
    textColor,
    onPress,
    children,
    height,
    width,
    style,
}: TButtonProps) => {
    const styles = StyleSheet.create({
        background: {
            backgroundColor: `${backgroundColor}`,
            borderRadius: 14,
            ...(height ? { height } : { height: "100%" }),
            ...(width ? { width } : { width: "100%" }),
            ...style?.background,
        },
        text: {
            fontFamily: "Poppins-Bold",
            color: `${textColor}`,
            fontSize: 17,
            ...style?.text,
        },
        buttonWrapper: {
            width: "100%",
            ...style?.buttonWrapper,
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            ...style?.buttonContainer,
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
