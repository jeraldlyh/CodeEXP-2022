import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/rootStack";
import { AuthProvider } from "./providers/auth";
import Categories from "./screens/course/components/Categories";
import SuggestedCards from "./screens/course/components/SuggestedCards";
import CourseHome from "./screens/course/CourseHome";
import CourseStack from "./screens/course/CourseStack";


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
        });
        setIsLoaded(true);
    };

    return (
        <SafeAreaProvider>
            {isLoaded ? (
                // <AuthProvider>
                <NavigationContainer>
                    {/* <RootStack /> */}
                    <CourseStack />
                </NavigationContainer>
                // </AuthProvider>


            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
        </SafeAreaProvider>
    );
}
