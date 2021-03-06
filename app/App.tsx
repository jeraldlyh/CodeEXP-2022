import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/rootStack";
import { AuthProvider } from "./providers/auth";
import { ModalProvider } from "./providers/modal";
import { SWRConfig } from "swr";
import axiosInstance from "./axios";

const fetcher = async (endpoint: string) => {
    const response = await axiosInstance.get(endpoint);

    return response.data;
};

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            "Poppins-Normal": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
            "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
            "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        });
        setIsLoaded(true);
    };

    return (
        <SafeAreaProvider>
            {isLoaded ? (
                <ModalProvider>
                    <SWRConfig
                        value={{
                            fetcher,
                            onError: (error, key) => {
                                console.log(JSON.stringify(error))
                            },
                        }}
                    >
                        <AuthProvider>
                            <NavigationContainer>
                                <RootStack />
                            </NavigationContainer>
                        </AuthProvider>
                    </SWRConfig>
                </ModalProvider>
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
        </SafeAreaProvider>
    );
}
