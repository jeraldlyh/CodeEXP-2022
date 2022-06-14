import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import Button from "../../common/components/button";
import UploadImageField from "./components/UploadImageField";
import TextField from "./components/TextField";
import DescriptionField from "./components/DescriptionField";
import { TScreenProp } from "../types";

const SafetyConcernsPage = ({ navigation }: TScreenProp) => {
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
          Safety Concerns
        </Text>
      </View>

      <UploadImageField />

      <TextField
        title="Report Title"
        iconName="report"
        placeholder="Input title"
      />
      <DescriptionField
        title="Safety concern"
        iconName="category"
        placeholder="Input safety concern"
      />
      <DescriptionField
        title="Proposed Solution"
        iconName="description"
        placeholder="Input proposed solution"
      />
      <TextField
        title="Level of implementation"
        iconName="description"
        placeholder="Input level of implementation"
      />
      <TextField title="Cost" iconName="money" placeholder="Input cost" />

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

export default SafetyConcernsPage;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  headers: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  uploadImage: {
    width: "100%",
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  textInputBar: {
    width: "100%",
    padding: 10,
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 8,
  },
});
