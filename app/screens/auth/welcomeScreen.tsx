import React, { Fragment } from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import {
  backgroundOne,
  backgroundTwo,
  backgroundThree,
} from "../../assets/welcome-screen";
import Button from "../../common/components/button";
import { MAIN_THEME } from "../../common/constants";
import { TScreenProp } from "../types";

const Title = () => {
  return (
    <View style={styles.titleTextContainer}>
      <Text style={styles.titleTextLeft}>one</Text>
      <Text style={styles.titleTextRight}>NS</Text>
    </View>
  );
};

const WelcomeScreen = ({ navigation }: TScreenProp) => {
  const IMAGE_DATA = [
    { image: backgroundOne, text: "Providing greater convenience for NS men" },
    { image: backgroundTwo, text: "Providing greater convenience for NS men" },
    { image: backgroundThree, text: "Providing greater convenience for NS men" },
  ];

  return (
    <View style={styles.container}>
      <Swiper autoplay showsPagination>
        {IMAGE_DATA.map((data, index) => (
          <ImageBackground
            key={index}
            source={data.image}
            style={styles.imageContainer}
          >
            <View style={styles.imageDescriptionContainer}>
              <View style={styles.titleContainer}>
                <Title />
              </View>
              <Text style={styles.descriptionText}>{data.text}</Text>
            </View>
          </ImageBackground>
        ))}
      </Swiper>

      <View style={styles.buttonContainerWrapper}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.push("Login")}
            backgroundColor="#91B48C"
            children="Login"
            textColor="#fff"
            height={56}
            width={308}
          />
          <TouchableOpacity
            onPress={() => navigation.push("Register")}
            style={styles.signUpTextContainer}
          >
            <Text style={styles.signUpTextLeft}>Don't have an account?</Text>
            <Text style={styles.signUpTextRight}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    flex: 1,
    resizeMode: "cover",
  },
  imageDescriptionContainer: {
    marginTop: 522,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 52,
  },
  titleContainer: {
    alignSelf: "flex-end",
  },
  titleTextContainer: {
    flexDirection: "row",
  },
  titleTextLeft: {
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    color: "#fff",
  },
  titleTextRight: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 36,
    color: MAIN_THEME_COLOR.GREEN,
  },
  descriptionText: {
    width: "70%",
    color: "#fff",
    fontSize: 19,
    fontWeight: "500",
    alignSelf: "flex-end",
    textAlign: "right",
    lineHeight: 27,
  },
  buttonContainerWrapper: {
    position: "absolute",
    alignSelf: "center",
    bottom: 110,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpTextContainer: {
    display: "flex",
    flexDirection: "row",
    fontSize: 13,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  signUpTextLeft: { fontSize: 16, color: "#fff", marginRight: 2 },
  signUpTextRight: {
    fontSize: 16,
    fontWeight: "bold",
    color: MAIN_THEME_COLOR.GREEN,
  },
});

export default WelcomeScreen;
