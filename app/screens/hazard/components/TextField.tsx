import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MAIN_THEME
 } from "../../../common/constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";

type TextFieldProps = {
  title: string;
  iconName: string;
  placeholder: string;
};

const TextField = (props: TextFieldProps) => {
  return (
    <>
      <View style={styles.headers}>
        <MaterialIcons
          name={props.iconName}
          color={MAIN_THEME.COLOR.GREEN}
          size={27}
        />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.textInputBar}>
        <TextInput placeholder={props.placeholder} />
      </View>
    </>
  );
};

export default TextField;

const styles = StyleSheet.create({
  headers: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  textInputBar: {
    width: "100%",
    padding: 15,
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 8,
  },
  title: {
    marginLeft: 10,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});
