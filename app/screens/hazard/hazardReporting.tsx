import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import Button from "../../common/components/button";
import TextField from "./components/TextField";
import DescriptionField from "./components/DescriptionField";
import UploadImageField from "./components/UploadImageField";
import { TScreenProp } from "../types";

const HazardReportingPage = ({ navigation }: TScreenProp) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Icon
          name="arrow-left"
          size={20}
          style={{ position: "absolute", left: 0 }}
          onPress={() => navigation.pop()}
        />
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
          Hazard Reporting
        </Text>
      </View>

      <UploadImageField />

      <TextField
        title="Report Title"
        iconName="report"
        placeholder="Input title here"
      />
      <TextField
        title="Category of incident"
        iconName="category"
        placeholder="Input category of incident here"
      />
      <TextField
        title="Location"
        iconName="location-on"
        placeholder="Input location here"
      />
      <TextField
        title="Date & Time"
        iconName="calendar-today"
        placeholder="Input time of incident"
      />
      <TextField
        title="Day light condition"
        iconName="wb-sunny"
        placeholder="Input day light condition"
      />
      <DescriptionField
        title="Description"
        iconName="description"
        placeholder="Input description"
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

export default HazardReportingPage;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
