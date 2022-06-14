import { useNavigationState } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import BackButton from "./backButton";

type THeaderProps = {
    title: string;
    navigation: any;
};

const Header = ({ title, navigation }: THeaderProps) => {
    const [canGoBack, setCanGoBack] = useState<boolean>(false);
    const navigationState = useNavigationState((state) => state.index);

    useEffect(() => {
        if (navigation.canGoBack()) {
            setCanGoBack(true);
        } else {
            setCanGoBack(false);
        }
    }, [navigationState]);

    return (
        <SafeAreaView style={styles.container}>
            {canGoBack && (
                <BackButton navigation={navigation} style={styles.backButton} />
            )}
            <Text
                style={{
                    ...styles.titleText,
                    ...(canGoBack && {
                        marginRight: 50, // TODO: Not true center
                    }),
                }}
            >
                {title}
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderBottomColor: "#F0F0F0",
        borderBottomWidth: 1,
    },
    titleText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 25,
        textAlign: "center",
        flex: 1,
        paddingVertical: 10,
    },
    backButton: {
        paddingLeft: 26,
        color: "black",
    },
});

export default Header;
