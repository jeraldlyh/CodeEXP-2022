import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { TScreenProp } from "../types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TextField from "../hazard/components/TextField";
import DescriptionField from "../hazard/components/DescriptionField";
import Button from "../../common/components/button";

const createTrainingPage = ({ navigation }: TScreenProp) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.title}>
        <Icon
          name="arrow-left"
          size={20}
          style={{ position: "absolute", left: 0 }}
          onPress={() => navigation.pop()}
        />
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
          Create training
        </Text>
      </View>
      <TextField
        title="Date & Time"
        iconName="calendar-today"
        placeholder="Input time of incident"
      />
      <TextField
        title="Invite people"
        iconName="people"
        placeholder="Add people"
      />
      <TextField
        title="Location"
        iconName="location-on"
        placeholder="Input location"
      />
      <DescriptionField
        title="Goals"
        iconName="location-on"
        placeholder="Input goals for session"
      />
      <View style={{ marginTop: 30, marginBottom: 140 }}>
        <Button
          backgroundColor={"#91B48C"}
          textColor={"white"}
          children={"Submit"}
          onPress={function (): void {
            throw new Error("Function not implemented.");
          }}
          height={56}
          width={355}
        />
      </View>
    </ScrollView>
  );
};

export default createTrainingPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
