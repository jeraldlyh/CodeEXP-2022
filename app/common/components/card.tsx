import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MAIN_THEME } from "../constants";

type TCardProps = {
    title: string;
    body: React.ReactNode;
    imageSrc: any;
};

const Card = ({ title, body, imageSrc }: TCardProps) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                {body}
            </View>
            <Image
                source={imageSrc}
                style={{
                    alignSelf: "flex-end",
                    height: "100%",
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        borderRadius: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        backgroundColor: MAIN_THEME.COLOR.CARD,
        minHeight: 120,
        marginBottom: 10,
        justifyContent: "space-between",
        overflow: "hidden",
    },
    cardTextContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 16,
        alignItems: "flex-start",
        justifyContent: "space-between",
        minWidth: 210,
        maxWidth: 210,
    },
    cardTitle: {
        fontFamily: "Poppins-Bold",
        fontSize: 18,
    },
    cardDescription: {
        fontFamily: "Poppins-Normal",
        marginVertical: 5,
    },
    cardButton: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#F0F0F0",
        borderRadius: 7,
    },
    cardButtonText: {
        color: MAIN_THEME.COLOR.GREEN,
    },
});

export default Card;
