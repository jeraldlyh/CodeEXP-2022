import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";

import { MAIN_THEME_COLOR } from "../../common/constants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TScreenProp } from "../types";
import Button from "../../common/components/button";

const SettingOption = (props: any) => {
  const styles = StyleSheet.create({
    container: {
      height: 56,
      flexDirection: "row",
      width: 350,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      shadowColor: "#18396B",
      shadowOffset: { width: 0, height: 1.5 },
      shadowOpacity: 0.2,
      shadowRadius: 0.5,
      marginBottom: 12,
      backgroundColor: "#F9F9F9",
    },
    text: {
      fontSize: 15,
      color: "#091F44",
      fontFamily: "Poppins-Normal",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={{ width: "15%", marginLeft: 8 }}>
        <Icon name={props.icon} size={25} color={MAIN_THEME_COLOR.GREEN} />
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          width: "85%",
        }}
      >
        <Text style={styles.text}> {props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

function SettingsPage({ navigation }: TScreenProp) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.title}>
        <Icon
          name="arrow-left"
          size={20}
          style={{ position: "absolute", left: 0 }}
          onPress={() => navigation.pop()}
        />
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25}}>
          Settings
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
          <Text style={styles.subHeader}>Account</Text>
          <SettingOption
            text="Set Two-Factor Authentication"
            icon="lock-outline"
            onPress={() => console.log("")}
          />
          <SettingOption
            text="Language"
            icon="translate"
            onPress={() => console.log("")}
          />
          <SettingOption
            text="Font Size"
            icon="format-size"
            onPress={() => console.log("")}
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.subHeader}>Notifications</Text>
          <SettingOption
            text="Notification Settings"
            icon="bell-outline"
            onPress={() => console.log("")}
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.subHeader}>About</Text>
          <SettingOption
            text="Terms of Use"
            icon="file-outline"
            onPress={() => console.log("")}
          />
          <SettingOption
            text="Privacy Policy"
            icon="shield-edit-outline"
            onPress={() => console.log("")}
          />
          <SettingOption
            text="Report a problem"
            icon="alert-circle-outline"
            onPress={() => console.log("")}
          />
        </View>

        <View style={{ marginTop: 30, marginBottom: 60 }}>
          <Button
            backgroundColor={"#91B48C"}
            textColor={"white"}
            children={"Log out"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
            height={56}
            width={355}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins-Bold",
    marginLeft: 3,
  },
  subHeader: {
    fontFamily: "Poppins-SemiBold",
    marginBottom: 10,
    marginTop: 17,
    marginLeft: 3,
    fontSize: 18,
  },
  subContainer: {
    width: "80%",
  },
  text: {
    color: "#9999AA",
    fontFamily: "Poppins-Normal",
  },
  individualRow: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 14,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  container: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

export default SettingsPage;
