import { StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../../common/components/button";
import { TScreenProp } from "../types";
import TextField from "./components/TextField";
import DescriptionField from "./components/DescriptionField";
import UploadImageField from "./components/UploadImageField";

const NearMissPage = ({ navigation }: TScreenProp) => {
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
          Near Miss
        </Text>
      </View>

      <UploadImageField/>

      <TextField
        title="Report Title"
        iconName="report"
        placeholder="Input title"
      />
      <TextField
        title="Category of incident"
        iconName="category"
        placeholder="Input category of incident"
      />
      <TextField
        title="Location"
        iconName="location-on"
        placeholder="Input location"
      />
      <TextField
        title="Date & Time"
        iconName="calendar-today"
        placeholder="Input time of incident"
      />
      <TextField
        title="Personnel involved"
        iconName="people"
        placeholder="Input personnel involved"
      />
      <DescriptionField
        title="Description"
        iconName="description"
        placeholder="Input description"
      />
      <TextField
        title="Type of hazard"
        iconName="wb-sunny"
        placeholder="Input type of hazard"
      />
      <View style={{ marginTop: 30, marginBottom: 140}}>
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

export default NearMissPage;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});
