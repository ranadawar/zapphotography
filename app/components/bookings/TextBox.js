import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { gstyles } from "../../constants/styles";
import { COLORS } from "../../constants/theme";

const TextBox = ({
  title = "Notes",
  description = "Hello my name is Dawar and I am a software engineer",
}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={gstyles.titleGray}>{title}</Text>
      <Text style={gstyles.regular}>{description}</Text>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
