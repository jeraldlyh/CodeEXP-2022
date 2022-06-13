import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { loginBackground } from "../../assets/login-screen";
import BackButton from "../../common/components/backButton";
import Button from "../../common/components/button";
import { MAIN_THEME_COLOR } from "../../common/constants";
import { useAuth } from "../../providers/auth";
import { TScreenProp } from "../types";

const LoginScreen = ({ navigation }: TScreenProp) => {
  const [username, setUsername] = useState<string>("");
  const [isSecure, setIsSecure] = useState(true);
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(username, password);
    } catch (error) {
      const errorResponse = (error as any).response;

      if (errorResponse.status === 401) {
        setErrorMessage(errorResponse.message || "Invalid credentials");
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={loginBackground} style={styles.imageContainer} />
      <View style={styles.containerWrapper}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <BackButton />
          <Text style={styles.titleText}>Login</Text>
          <TextInput
            label="Username"
            style={styles.textInput}
            placeholder={username}
            activeUnderlineColor={MAIN_THEME_COLOR.GREEN}
            underlineColor="transparent"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="Password"
            secureTextEntry={isSecure}
            style={styles.textInput}
            placeholder={password}
            activeUnderlineColor={MAIN_THEME_COLOR.GREEN}
            underlineColor="transparent"
            onChangeText={(text) => setPassword(text)}
            right={
              isSecure ? (
                <TextInput.Icon
                  name="eye"
                  onPress={() => setIsSecure(!isSecure)}
                />
              ) : (
                <TextInput.Icon
                  name="eye-off"
                  onPress={() => setIsSecure(!isSecure)}
                />
              )
            }
          />
          {errorMessage ? (
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          ) : null}
        </TouchableWithoutFeedback>
        <Button
          width={326}
          height={56}
          children="Login"
          backgroundColor={MAIN_THEME_COLOR.GREEN}
          textColor="#fff"
          onPress={() => handleLogin()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerWrapper: {
    position: "absolute",
    marginTop: 225,
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  titleText: {
    fontSize: 34,
    fontFamily: "Poppins-Bold",
    color: "#fff",
    marginTop: 30,
    marginBottom: 25,
  },
  textInput: {
    fontFamily: "Poppins-Normal",
    width: 324,
    height: 60,
    backgroundColor: "#E1E0DF",
    borderRadius: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginBottom: 22,
  },
  errorMessageText: {
    marginVertical: 5,
    color: "#F54322",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});

export default LoginScreen;
