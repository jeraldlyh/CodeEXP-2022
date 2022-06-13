import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MAIN_THEME_COLOR } from "../../../common/constants";

const UploadImageField = () => {
  return (
    <>
      <View style={[styles.headers]}>
        <Icon name="cloud-upload" color={MAIN_THEME_COLOR.GREEN} size={20} />
        <Text
          style={{
            marginLeft: 10,
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
          }}
        >
          Upload Image
        </Text>
      </View>

      <TouchableOpacity containerStyle={styles.uploadImage}>
        <Icon name="plus" color={"#666666"} size={20} />
      </TouchableOpacity>
    </>
  );
};

export default UploadImageField;

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  uploadImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#F4F4F4",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
