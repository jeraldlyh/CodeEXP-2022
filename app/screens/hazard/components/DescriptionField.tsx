import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MAIN_THEME
 } from "../../../common/constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";

type DescriptionFieldProps = {
  title: string;
  iconName: string;
  placeholder: string;
};

const DescriptionField = (props: DescriptionFieldProps) => {
  const [length, setLength] = useState<number>(0);
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
        <TextInput
          placeholder={props.placeholder}
          maxLength={500}
          onChangeText={(newText) => {
            setLength(newText.length);
          }}
        />
      </View>
      <Text style={styles.wordCount}>{500 - length}/500 characters</Text>
    </>
  );
};

export default DescriptionField;

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
    height: 200,
  },
  title: {
    marginLeft: 10,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  wordCount: {
    marginRight: "auto",
    fontFamily: "Poppins-Normal",
    fontSize: 14,
    color: "grey",
    marginTop: 20,
  },
});
